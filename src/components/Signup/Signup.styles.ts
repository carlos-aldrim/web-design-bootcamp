import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  card: {
    overflow: "hidden",
    position: "relative",
    zIndex: 3,
    width: "100%",
    margin: 0,
    padding: "160px 30px 38px",
    background: "#ffffff",
    borderRadius: "1.25rem",
    textAlign: "center",
    boxShadow: "0 100px 100px rgb(0 0 0  / 10%)",
    "&::before": {
      content: '""',
      position: "absolute",
      background: "#216ce7",
      top: "-880px",
      left: "50%",
      width: "1000px",
      height: "1000px",
      borderRadius: "50%",
      translate: "-50% 0",
    },
    "&>h2": {
      fontSize: "22px",
      fontWeight: 400,
      margin: "0 0 30px",
      color: "#2a3444",
    },
  },
  icon: {
    color: "#216ce7",
    "&.MuiSvgIcon-root": {
      height: "38px",
      width: "38px",
    },
  },
  logo: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    height: "64px",
    width: "64px",
    top: "30px",
    left: "50%",
    translate: "-50% 0",
  },
  form: {
    margin: "0 0 30px",
    display: "grid",
    gap: "18px",
  },
  input: {
    width: "100%",
    height: "50px",
    borderRadius: "20px",
    border: "2px slolid #e0e0e0",
    fontFamily: "inherit",
    fontSize: "16px",
    padding: "0 24px",
    color: "#11274c",
    transition: "all 0.375s",
    "&:hover": {
      border: "2px slolid #000000",
    },
    "&::placeholder": {
      color: "#cacBcB",
    },
  },
  button: {
    width: "100%",
    height: "50px",
    borderRadius: "20px",
    cursor: "pointer",
    padding: "0 16px",
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
      color: "#ffffff",
      background: "#143d81",
    },
  },
  footer: {
    color: "#7c7c7c",
  },
  a: {
    color: "#216ce7",
    transition: "all 0.375s",
    marginLeft: "5px",
    "&:hover": {
      color: "#143d81",
    },
  },
  "@media (width >= 500px)": {
    card: {
      margin: 0,
      width: "360px",
    }
  },
});