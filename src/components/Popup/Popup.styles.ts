import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  button: {
    fontFamily: "inherit",
    cursor: "pointer",
    background: "#1a1a1a",
    color: "#f9f9f9",
    border: 0,
    borderRadius: "8px",
    padding: "20px 36px",
    fontSize: "16px",
  },
  modalBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    opacity: 0,
    visibility: "hidden",
    transform: "scale(1, 1)",
    background: "rgba(0, 0, 0, 0.5)",
    transition: "0.5s",
  },
  modalBackgroundOpen: {
    opacity: 1,
    visibility: "visible",
    animation: "$backgroundIn 1s both",
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    background: "#37353b",
    color: "#f9f9f9",
    padding: "48px 40px",
    borderRadius: "12px",
    width: "300px",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    visibility: "hidden",
    transition: "0.3s",
  },
  modalOpen: {
    opacity: 1,
    visibility: "visible",
    animation: "$modalIn 1s",
  },
  "@keyframes backgroundIn": {
    "0%": {
      transform: "scale(0) scaleY(0.005)",
    },
    "33%": {
      transform: "scale(1) scaleY(0.005)",
    },
    "66%, 100%": {
      transform: "scale(1) scaleY(1)",
    },
  },
  "@keyframes modalIn": {
    "0%, 66%": {
      opacity: 0,
      visibility: "hidden",
      transform: "translate(-50%, -30%)",
    },
    "100%": {
      opacity: 1,
      visibility: "visible",
    },
  },
});