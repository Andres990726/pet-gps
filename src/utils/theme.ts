import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      contrastText: "#FFFFFF",
      main: "#609633",
    },
    secondary: {
      contrastText: "#FFFFFF",
      main: "#477823",
    },
    background: {
      paper: "#fbfbfb",
      default: "#f3f3f3",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});
