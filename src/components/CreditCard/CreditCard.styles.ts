import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    margin: "0 auto",
    maxWidth: "34rem",
    width: "90%",
  },
  input: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    font: "inherit",
    width: "auto",
    "&::placeholder": {
      color: "#fff",
    },
    "&:focus": {
      outline: "none",
    },
  },
  label: {
    display: "block",
  },
  card: {
    backgroundColor: "#171a1c",
    borderRadius: "14px",
    color: "#bebebe",
    padding: "32px",
  },
  header: {
    marginBottom: "7rem",
  },
  title: {
    color: "#fff",
    float: "left",
    fontSize: "1.5rem",
  },
  logo: {
    float: "right",
  },
  visa: {
    fill: "#fff",
  },
  row: {
    marginBottom: "1.5rem",
  },
  content: {
    marginBottom: "5rem",
    "& input": {
      outline: "none",
    },
  },
  cardNumber: {
    fontSize: "32px",
  },
  cardExpire: {
    "& input": {
      fontSize: "0.9rem",
    },
  },
  cardExpireMonth: {
    width: "22%",
    float: "left",
  },
  cardExpireYear: {
    width: "22%",
    float: "left",
  },
  cardCvv: {
    float: "right",
    "& input": {
      width: "2rem",
      textAlign: "center",
      fontSize: "0.9rem",
    },
  },
});