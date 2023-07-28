import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 24px",
  },
  toggle: {
    width: "40px",
    height: "40px",
    position: "fixed",
    top: "3%",
    right: "3%",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
});