import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const metadata = {
    title: "About",
    description: "Why this site exists and how each seafood linguine is scored.",
};

export default function AboutPage() {
    return (
        <Container maxWidth="lg">
            <Box sx={{pt: {xs: 8, md: 14}}}>
                <Typography
                    component="h1"
                    variant="h1"
                    sx={{
                        maxWidth: 920,
                        mt: 2,
                        fontSize: {xs: "2.5rem", sm: "3.5rem", md: "4.5rem"},
                        lineHeight: 0.94,
                    }}
                >
                    In search of the perfect seafood pasta.
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {xs: "1fr", md: "0.8fr 1.2fr"},
                        gap: {xs: 6, md: 12},
                        mt: {xs: 8, md: 12},
                    }}
                >
                    <Typography variant="h3" sx={{fontSize: {xs: "1.5rem", md: "2rem"}, lineHeight: 1.3}}>
                        What can I say, I just love seafood pastas. Yum!
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
