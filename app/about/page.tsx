import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const metadata = {
  title: "About",
  description: "Why this site exists and how each seafood linguine is scored.",
};

export default function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: { xs: 8, md: 14 } }}>
        <Typography variant="overline" color="secondary.main">
          About the project
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            maxWidth: 920,
            mt: 2,
            fontSize: { xs: "3.4rem", sm: "5.5rem", md: "7rem" },
            lineHeight: 0.94,
          }}
        >
          One dish. Every time.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
            gap: { xs: 6, md: 12 },
            mt: { xs: 8, md: 12 },
          }}
        >
          <Box>
            <Typography variant="overline" color="text.secondary">
              The premise
            </Typography>
          </Box>
          <Stack spacing={4}>
            <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.25 }}>
              Seafood linguine is the constant. Everything else is the experiment.
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 650, lineHeight: 1.8 }}>
              This is a personal record of every seafood linguine I order: the restaurant,
              the date, the price, and an honest score out of ten. No elaborate rubric—just
              whether the pasta, seafood, sauce, and value came together on the plate.
            </Typography>
          </Stack>
        </Box>

        <Divider sx={{ my: { xs: 8, md: 12 } }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 5, md: 8 },
          }}
        >
          {[
            ["01", "The pasta", "Texture, seasoning, and whether the linguine carries the sauce."],
            ["02", "The seafood", "Quality, generosity, and how well each element is cooked."],
            ["03", "The whole plate", "Balance, value, and the only question that matters: would I return?"],
          ].map(([number, title, copy]) => (
            <Box key={number}>
              <Typography variant="overline" color="secondary.main">
                {number}
              </Typography>
              <Typography variant="h3" sx={{ mt: 2, mb: 2, fontSize: "2rem" }}>
                {title}
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {copy}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
