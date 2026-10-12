import type { Metadata } from "next";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { notFound } from "next/navigation";
import NextLink from "@/app/components/next-link";
import { entries } from "@/app/lib/entries";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function generateStaticParams() {
  return entries.map((entry) => ({ name: entry.slug }));
}

export async function generateMetadata(
  props: PageProps<"/p/[name]">,
): Promise<Metadata> {
  const { name } = await props.params;
  const entry = entries.find((candidate) => candidate.slug === name);

  if (!entry) return {};

  return {
    title: entry.name,
    description: entry.description,
    openGraph: {
      title: entry.name,
      description: entry.description,
      images: [entry.photo],
    },
  };
}

export default async function EntryPage(props: PageProps<"/p/[name]">) {
  const { name } = await props.params;
  const entry = entries.find((candidate) => candidate.slug === name);

  if (!entry) notFound();

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: { xs: 6, md: 10 } }}>
        <Button
          component={NextLink}
          href="/"
          variant="text"
          color="inherit"
          sx={{ px: 0, minHeight: 36 }}
        >
          ← All reviews
        </Button>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 220px" },
            gap: { xs: 4, md: 8 },
            alignItems: "end",
            mt: { xs: 5, md: 8 },
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box>
            <Typography variant="overline" color="secondary.main">
              Reviewed {dateFormatter.format(entry.date)}
            </Typography>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                mt: 1.5,
                fontSize: { xs: "3.4rem", sm: "5rem", md: "6.8rem" },
                lineHeight: 0.94,
              }}
            >
              {entry.name}
            </Typography>
          </Box>

          <Stack
            direction="row"
            sx={{ alignItems: "baseline", justifyContent: { md: "flex-end" } }}
          >
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: { xs: "4.5rem", md: "6rem" },
                lineHeight: 0.8,
              }}
            >
              {entry.rating.toFixed(1)}
            </Typography>
            <Typography color="text.secondary">/10</Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: { xs: "4 / 3", md: "16 / 9" },
            overflow: "hidden",
            bgcolor: "divider",
          }}
        >
          <Image
            src={entry.photo}
            alt={`Seafood linguine at ${entry.name}`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(220px, 0.45fr) minmax(0, 1fr)" },
            gap: { xs: 5, md: 10 },
            pt: { xs: 5, md: 8 },
          }}
        >
          <Stack spacing={3}>
            <Box>
              <Typography variant="overline" color="text.secondary">
                Price
              </Typography>
              <Typography variant="h3" sx={{ mt: 0.5, fontSize: "2rem" }}>
                {entry.price}
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="overline" color="text.secondary">
                Visited
              </Typography>
              <Typography variant="body1" sx={{ mt: 0.5 }}>
                {dateFormatter.format(entry.date)}
              </Typography>
            </Box>
            <Button
              component="a"
              href={entry.googleMaps}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              color="primary"
              sx={{ alignSelf: "flex-start", mt: 1 }}
            >
              View on Google Maps ↗
            </Button>
          </Stack>

          <Box>
            <Typography variant="overline" color="text.secondary">
              The verdict
            </Typography>
            <Typography
              component="p"
              variant="h3"
              sx={{ mt: 2, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.25 }}
            >
              {entry.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
