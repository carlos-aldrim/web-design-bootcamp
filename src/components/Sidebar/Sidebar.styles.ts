import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  sidebar: {
    position: "absolute",
    overflow: "hidden",
    top: 0,
    left: 0,
    width: "75px",
    height: "100%",
    background: "#3949ab",
    transition: "all 0.4s",
  },
  sidebarOpen: {
    width: "240px",
  },
  inner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "300px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "68px",
    padding: "0 1.25rem 0 0",
    background: "rgba(0, 0, 0, 0.1)",
    borderLeft: "3px solid transparent",
    transition: "all 0.4s",
    "&:hover": {
      borderLeft: "3px solid #bdbdbd",
    },
  },
  burger: {
    width: "70px",
    height: "70px",
    display: "grid",
    placeItems: "center",
    background: "transparent",
    border: 0,
    padding: 0,
    cursor: "pointer",
  },
  logo: {
    height: "30px",
    opacity: 0,
    transition: "all 0.4s",
  },
  logoOpen: {
    opacity: 1,
    transition: "all 0.4s",
  },
  menu: {
    display: "grid",
  },
  button: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    height: "55px",
    fontFamily: "Ubuntu",
    background: "transparent",
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: "2px",
    lineHeight: 1,
    padding: "0 22px",
    borderLeft: "3px solid transparent",
    transition: "all 0.4s",
    border: 0,
    cursor: "pointer",
    "&:hover>span, &:hover>svg": {
      color: "#bdbdbd",
    },
    "&:hover": {
      borderLeft: "3px solid #f9f9f9",
    },
    "&.has-border": {
      paddingBottom: "1rem",
      borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
      marginBottom: "1rem",
    },
  },
  svg: {
    fontSize: "25px",
    color: "#f9f9f9",
    transition: "all 0.4s",
  },
  span: {
    color: "#f9f9f9",
    opacity: 0,
    transition: "all 0.4s",
  },
  spanOpen: {
    opacity: 1,
    transition: "all 0.4s",
  },
});
