import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
      light:"#E3E1D9 !important",
      dark:"#8D7B68 !important",
      
    }
  },
});
theme.typography.subtitle1 = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#333333",
  lineHeight: "25px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
    lineHeight: "29px",
  },
};
theme.typography.subtitle2 = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#333333",
  lineHeight: "20px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
    lineHeight: "22px",
  },
};
theme.typography.body1 = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#333333",
  lineHeight: "22px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
    lineHeight: "25px",
  },
};
theme.typography.h1 = {
  fontSize: "70px",
  fontWeight: "800",
  color: "rgb(203 213 225)",
  "&:hover": { color: "rgb(148 163 184)" },
  [theme.breakpoints.up("sm")]: {
    fontSize: "110px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "160px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "210px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "240px",
  },
};

export default theme;
