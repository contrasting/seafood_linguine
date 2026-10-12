import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default async function SiteFooter() {
  "use cache";

  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ mt: { xs: 10, md: 16 }, borderTop: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ py: 4, gap: 1, justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="caption" color="text.secondary">
            © Seafood Linguine {currentYear}
          </Typography>
          <IconButton
            component="a"
            href="https://github.com/contrasting/seafood_linguine"
            target="_blank"
            rel="noreferrer"
            aria-label="Seafood Linguine on GitHub"
            color="inherit"
            size="small"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
