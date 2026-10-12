import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import NextLink from "@/app/components/next-link";

export default function NotFound() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 12, md: 20 }, maxWidth: 720 }}>
        <Typography variant="overline" color="secondary.main">
          404 — plate not found
        </Typography>
        <Typography variant="h1" sx={{ mt: 2, mb: 4, fontSize: { xs: "4rem", md: "7rem" } }}>
          Nothing on this table.
        </Typography>
        <Button component={NextLink} href="/" variant="outlined">
          Return to the index
        </Button>
      </Box>
    </Container>
  );
}
