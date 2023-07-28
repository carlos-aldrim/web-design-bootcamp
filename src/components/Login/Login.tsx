import React from "react";
import { useStyles } from "./Login.styles";

export const Login: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <h2>Login</h2>
      <h3>Enter your credentials</h3>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Username" />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        <a className={styles.a} href="#">
          Forget your password?
        </a>
        <button className={styles.button} type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};
