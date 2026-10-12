"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#25352d",
      contrastText: "#f6f3eb",
    },
    secondary: {
      main: "#a84a2f",
    },
    background: {
      default: "#f6f3eb",
      paper: "#f6f3eb",
    },
    text: {
      primary: "#1d211e",
      secondary: "#666a63",
    },
    divider: "#c9c9be",
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    h1: {
      fontWeight: 400,
      letterSpacing: "-0.055em",
    },
    h2: {
      fontWeight: 400,
      letterSpacing: "-0.045em",
    },
    h3: {
      fontWeight: 400,
      letterSpacing: "-0.035em",
    },
    overline: {
      fontFamily: "var(--font-geist-mono), monospace",
      fontSize: "0.7rem",
      fontWeight: 700,
      letterSpacing: "0.14em",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: "100vh",
        },
        "::selection": {
          backgroundColor: "#25352d",
          color: "#f6f3eb",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          paddingInline: 20,
          minHeight: 46,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textUnderlineOffset: "0.2em",
        },
      },
    },
  },
});

export default theme;
