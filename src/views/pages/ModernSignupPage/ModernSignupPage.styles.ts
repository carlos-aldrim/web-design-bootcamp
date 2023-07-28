import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 34px",
  },
  circle: {
    position: "fixed",
    top: "-50vmin",
    left: "-50vmin",
    width: "100vmin",
    height: "100vmin",
    borderRadius: "47% 53% 61% 39% / 45% 51% 49% 55%",
    background: "#65c8ff",
    "&::after": {
      content: '""',
      position: "absolute",
      right: "calc(0vmin - 100vw)",
      bottom: "calc(0vmin - 100vh)",
      width: "inherit",
      height: "inherit",
      borderRadius: "inherit",
      background: "#143d81",
    },
  },
});