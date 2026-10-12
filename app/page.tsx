import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EntryIndex, { type EntryPreview } from "@/app/components/entry-index";
import { entries } from "@/app/lib/entries";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function Home() {
  const entryPreviews: EntryPreview[] = [...entries]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .map(({ name, slug, date, rating, photo }) => ({
      name,
      slug,
      date: dateFormatter.format(date),
      rating,
      photo,
    }));

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 8, md: 12 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            gap: 5,
            justifyContent: "space-between",
            alignItems: { md: "flex-end" },
          }}
        >
          <Typography
            component="h1"
            variant="h1"
            sx={{
              maxWidth: 620,
              fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.5rem" },
              lineHeight: 0.98,
            }}
          >
            Reviewing every seafood pasta I've ever eaten
          </Typography>
          <Box sx={{ minWidth: 130 }}>
            <Typography variant="overline" color="text.secondary">
              Pastas reviewed
            </Typography>
            <Typography
              sx={{ fontSize: "2.75rem", lineHeight: 1 }}
            >
              {entries.length.toString()}
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ borderColor: "text.primary" }} />
      <EntryIndex entries={entryPreviews} />
    </Container>
  );
}
