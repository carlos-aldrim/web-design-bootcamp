import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  boxColumn: {
    marginTop: "15px",
    width: "320px",
  },
  boxHeader: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    marginBottom: "10px",
  },
  span: {
    marginLeft: "5px",
    backgroundColor: "#fff",
    padding: "3px 6px",
    borderRadius: "3px",
    color: "#1976d2",
  },
  li: {
    marginRight: "5px",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    "&.MuiSvgIcon-root": {
      height: "15px",
      width: "15px",
      marginRight: "2px",
    },
  },
  add: {
    color: "#fff",
    "&.MuiSvgIcon-root": {
      height: "24px",
      width: "24px",
    },
  },
  box: {
    backgroundColor: "#fff",
    padding: "7px 20px",
    borderRadius: "8px",
    minHeight: "152px",
    cursor: "pointer",
    margin: "15px 5px",
    transition: "all 0.2s",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.23)",
    },
  },
  p: {
    margin: "2px 0 15px",
    fontSize: "14px",
    fontWeight: "400",
  },
  tag: {
    padding: "5px 8px",
    fontSize: "13px",
    fontWeight: "bold",
    color: "#fff",
    lineHeight: "50px",
    borderRadius: "4px",
  },
  red: {
    backgroundColor: "#f44336",
  },
  green: {
    backgroundColor: "#4caf50",
  },
  yellow: {
    backgroundColor: "#fbc02d",
  },
  boxFooter: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    fontSize: "14px",
    color: "#757575",
  },
  comment: {
    display: "flex",
    alignItems: "center",
  },
  date: {
    display: "flex",
  },
});
