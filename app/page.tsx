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
        <Typography variant="overline" color="secondary.main">
          An independent pasta journal
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            maxWidth: 900,
            mt: 2,
            fontSize: { xs: "3.25rem", sm: "5rem", md: "7.2rem" },
            lineHeight: { xs: 0.98, md: 0.92 },
          }}
        >
          In pursuit of the perfect plate.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            mt: { xs: 5, md: 8 },
            gap: 4,
            justifyContent: "space-between",
            alignItems: { md: "flex-end" },
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 490, fontSize: { xs: "1rem", md: "1.15rem" }, lineHeight: 1.7 }}
          >
            A straightforward record of every seafood linguine I eat—where it was,
            what it cost, and whether it was worth ordering again.
          </Typography>
          <Box sx={{ minWidth: 130 }}>
            <Typography variant="overline" color="text.secondary">
              Plates reviewed
            </Typography>
            <Typography
              sx={{ fontSize: "2.75rem", lineHeight: 1 }}
            >
              {entries.length.toString().padStart(2, "0")}
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ borderColor: "text.primary" }} />
      <Stack
        direction="row"
        sx={{ pt: 3, pb: 1, justifyContent: "space-between", alignItems: "baseline" }}
      >
        <Typography variant="overline">The index</Typography>
        <Typography variant="caption" color="text.secondary">
          Newest first
        </Typography>
      </Stack>
      <EntryIndex entries={entryPreviews} />
    </Container>
  );
}
