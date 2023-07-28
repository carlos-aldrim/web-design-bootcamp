import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  body: {
    width: "100vw",
    minHeight: "100vh",
    height: "100%",
    backgroundColor: "#78909c",
    padding: "10px",
  },
  h2: {
    margin: "20px 0 8px 30px",
    color: "#212121",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});
