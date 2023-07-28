import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  body: {
    width: "100vw",
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    fontFamily: "sans-serif",
    fontSize: "1.6rem",
    backgroundColor: "#12131c",
    margin: 0,
    padding: 0,
  },
  footer: {
    padding: "0 5rem",
    backgroundColor: "#151823",
    color: "#666873",
  },
  container: {
    maxWidth: "116rem",
    margin: "auto",
    padding: "0 1.5rem",
    overflow: "hidden",
    resize: "horizontal",
  },
  top: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
    rowGap: "2rem",
  },
  title: {
    fontSize: "1.8rem",
    color: "#fff",
    fontWeight: 500,
    marginBottom: "2rem",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: 0,
  },
  item: {
    listStyle: "none",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    transition: "color 0.25s",
    "&:hover": {
      color: "#fff",
    },
  },
  divider: {
    marginBlock: "2.5rem",
    border: "none",
    borderTop: "1px solid rgba(252, 255, 255, 0.1)",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
    alignItems: "center",
    "&>ul": {
      display: "flex",
      flexDirection: "row",
    },
  },
  icon: {
    "&.MuiSvgIcon-root": {
      height: "28px",
      width: "28px",
    },
  },
});
