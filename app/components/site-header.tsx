import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "@/app/components/next-link";

export default function SiteHeader() {
  return (
    <Box component="header" sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{
            minHeight: { xs: 72, md: 88 },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            component={NextLink}
            href="/"
            color="text.primary"
            underline="none"
            sx={{ display: "inline-flex", alignItems: "baseline", gap: 1 }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: { xs: "1.15rem", md: "1.35rem" },
                letterSpacing: "-0.035em",
              }}
            >
              Seafood Linguine
            </Typography>
            <Box
              component="span"
              sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "secondary.main" }}
            />
          </Link>

          <Stack component="nav" direction="row" spacing={{ xs: 2.5, md: 4 }}>
            <Link
              component={NextLink}
              href="/"
              color="text.secondary"
              underline="none"
              variant="button"
            >
              Reviews
            </Link>
            <Link
              component={NextLink}
              href="/about"
              color="text.secondary"
              underline="none"
              variant="button"
            >
              About
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
