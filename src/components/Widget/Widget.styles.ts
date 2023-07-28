import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  widget: {
    background: "#17181a",
    width: "300px",
    borderRadius: "8px",
  },
  input: {
    display: "none",
  },
  title: {
    margin: "0 0 10px",
    fontSize: "18px",
    fontWeight: 400,
  },
  content: {
    position: "relative",
    overflow: "hidden",
    height: "140px",
  },
  inner: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    width: "calc(300px * 3)",
    transition: "0.3s",
    color: "#f9f9f9",
  },
  session: {
    width: "inherit",
    padding: "20px",
  },
  symbols: {
    padding: "20px",
    fontSize: "15px",
    width: "64px",
    opacity: 0.35,
    cursor: "pointer",
    color: "#f9f9f9",
  },
  selectedSymbols: {
    opacity: 1,
  },
  description: {
    margin: "0",
    fontSize: "15px",
    color: "#888889",
  },
  buttons: {
    position: "relative",
    display: "flex",
    borderBottom: "1px solid #575757",
  },
  underline: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "64px",
    height: "3px",
    background: "#1976D2",
    transition: "0.2s",
  },
  tabs: {
    "& input:first-of-type:checked + .buttons": {
      color: "red",
    },
  },
});
