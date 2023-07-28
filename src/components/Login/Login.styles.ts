import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  card: {
    position: "relative",
    zIndex: 3,
    width: "100%",
    margin: "0 20px",
    padding: "70px 30px 44px",
    borderRadius: "1.25rem",
    background: "#fff",
    textAlign: "center",
    "&>h2": {
      fontSize: "36px",
      fontWeight: 600,
      margin: "0 0 12px",
    },
    "&>h3": {
      color: "rgba(0, 0, 0, 0.38)",
      margin: "0 0 30px",
      fontWeight: 500,
      fontSize: "1rem",
    },
  },
  form: {
    width: "100%",
    margin: 0,
    display: "grid",
    gap: "16px",
  },
  input: {
    width: "100%",
    height: "50px",
    border: "2px solid #ebebeb",
    fontFamily: "inherit",
    fontSize: "15px",
    padding: "0 16px",
    borderRadius: "1.25rem",
    transition: "all 0.375s",
    "&:hover": {
      border: "2px solid #10449A",
    },
  },
  button: {
    height: "50px",
    cursor: "pointer",
    width: "100%",
    padding: "0 16px",
    borderRadius: "1.25rem",
    background: "#216ce7",
    color: "#f9f9f9",
    border: 0,
    fontFamily: "inherit",
    fontSize: "1rem",
    fontWeight: 600,
    textAlign: "center",
    letterSpacing: "2px",
    transition: "all 0.375s",
    "&:hover": {
      background: "#10449A",
    },
  },
  a: {
    color: "#216ce7",
    fontSize: "0.9rem",
    textAlign: "left",
    textDecoration: "none",
    marginBottom: "6px",
    transition: "all 0.375s",
    "&:hover": {
      color: "#10449A",
    },
  },
  "@keyframes rotate": {
    "100%": {
      backgroundPosition: "15% 50%",
    },
  },
  "@media (width >= 500px)": {
    body: {
      padding: 0,
    },
    card: {
      margin: 0,
      width: "400px",
    },
  },
});
