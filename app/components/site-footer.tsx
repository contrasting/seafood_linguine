import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ mt: { xs: 10, md: 16 }, borderTop: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ py: 4, gap: 1, justifyContent: "space-between" }}
        >
          <Typography variant="caption" color="text.secondary">
            Seafood Linguine — an ongoing field guide.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            London &amp; elsewhere
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
