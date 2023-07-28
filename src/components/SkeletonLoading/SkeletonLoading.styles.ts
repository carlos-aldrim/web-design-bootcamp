import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  card: {
    maxWidth: "380px",
    padding: "1.3rem",
    borderRadius: "0.5rem",
    transition: "all 0.3s ease",
  },
  image: {
    height: "auto",
    marginBottom: "1rem",
    "& img": {
      width: "100%",
      borderRadius: "0.25rem",
    },
  },
  header: {
    fontSize: "1.25rem",
    textDecoration: "none",
    fontWeight: "600",
    display: "inline-block",
    marginBottom: "0.25rem",
  },
  info: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  loadingImage: {
    position: "relative",
    top: 0,
    left: 0,
    borderRadius: "0.25rem",
    height: "253.8px",
    marginBottom: "1rem",
    zIndex: 100,
    backgroundSize: "200%",
    animation: "$loading 1s infinite reverse",
    width: "338.4px",
  },
  loadingHeader: {
    position: "relative",
    top: 0,
    left: 0,
    borderRadius: "0.25rem",
    marginBottom: "0.25rem",
    width: "145px",
    zIndex: 100,
    backgroundSize: "200%",
    animation: "$loading 1s infinite reverse",
    height: "2.25rem",
  },
  loadingInfo: {
    position: "relative",
    top: 0,
    left: 0,
    borderRadius: "0.25rem",
    width: "100%",
    margin: "16px 0",
    zIndex: 100,
    backgroundSize: "200%",
    animation: "$loading 1s infinite reverse",
    height: "53.3px",
  },
  "@keyframes loading": {
    "0%": {
      backgroundPosition: "-100% 0",
    },
    "100%": {
      backgroundPosition: "100% 0",
    },
  },
});