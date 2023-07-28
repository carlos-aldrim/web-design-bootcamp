import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main: {
    maxWidth: "100vw",
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    backgroundColor: "#12131c",
  },
  container: {
    maxWidth: "650px",
    margin: "50px auto",
  },
  timeline: {
    position: "relative",
    paddingLeft: "4rem",
    margin: "0 0 0 30px",
    color: "#fff",
    "&::before": {
      content: '""',
      width: "4px",
      height: "99%",
      position: "absolute",
      backgroundColor: "#27293d",
      left: "0",
      top: "15px",
    },
  },
  box: {
    position: "relative",
    marginBottom: "2.5rem",
  },
  icon: {
    position: "absolute",
    left: "-88px",
    top: "4px",
    width: "48px",
    height: "48px",
    backgroundColor: "#4f537b",
    borderRadius: "50%",
    fontSize: "3rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#27293d",
    borderRadius: "6px",
    padding: "20px 18px 15px 20px",
    boxShadow: "1px 3px 9px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "all 0.5s ease",
    "&:hover": {
      boxShadow: "1px 3px 20px rgba(0, 0, 0, 0.6)",
    },
    "&::before": {
      content: '""',
      backgroundColor: "inherit",
      width: "20px",
      height: "20px",
      display: "block",
      position: "absolute",
      left: "-10px",
      transform: "rotate(45deg)",
      borderRadius: "0 0 0 3px",
    },
  },
  header: {
    margin: "0 0 1.2rem 0",
  },
  badge: {
    backgroundColor: "#4f537b",
    padding: "4px 8px",
    fontSize: "12px",
    borderRadius: "4px",
    fontWeight: "bold",
  },
  time: {
    fontWeight: "300",
    fontStyle: "italic",
    opacity: "0.4",
    marginTop: "16px",
    fontSize: "11px",
  },
  primary: {
    backgroundColor: "#42a5f5",
  },
  success: {
    backgroundColor: "#66bb6a",
  },
  danger: {
    backgroundColor: "#ec407a",
  },
  warning: {
    backgroundColor: "#ffa726",
  },
  info: {
    backgroundColor: "#29b6f6",
  },
});
