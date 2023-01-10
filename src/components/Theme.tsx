import { createTheme } from "@mui/material";

const Theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "Quicksand",
      "Rubik",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#00A2A2",
    },
    secondary: {
      main: "#A20000",
    },
    info: {
      main: "#FFFFFF"
    }
  },
});

export default Theme;
