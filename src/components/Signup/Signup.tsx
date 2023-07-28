import React from "react";
import { useStyles } from "./Signup.styles";
import { CurrencyBitcoin } from "@mui/icons-material";

export const Signup: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <CurrencyBitcoin className={styles.icon} />
      </div>
      <h2>Create Account</h2>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Name" />
        <input className={styles.input} type="email" placeholder="Email" />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        <button className={styles.button} type="submit">
          SIGN UP
        </button>
      </form>
      <footer className={styles.footer}>
        Existing user, sign in
        <a className={styles.a} href="#">
          Here
        </a>
      </footer>
    </div>
  );
};
