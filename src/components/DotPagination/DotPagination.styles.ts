import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  pager: {
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: "0 0 42px",
    height: "42px",
    border: "0",
    padding: "6px",
    background: "transparent",
    cursor: "pointer",
    transition: "0.4s",
    "&:focus": {
      flex: "0 0 80px",
      "&>span": {
        background: "#00c853",
      },
    },
  },
  span: {
    display: "block",
    height: "30px",
    width: "100%",
    borderRadius: "15px",
    background: "#383142",
    transition: "0.4s",
  },
});