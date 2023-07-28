import React from "react";
import { useStyles } from "./DotPagination.styles";

export const DotPagination: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.pager}>
      <button className={styles.button}>
        <span className={styles.span}></span>
      </button>
      <button className={styles.button}>
        <span className={styles.span}></span>
      </button>
      <button className={styles.button}>
        <span className={styles.span}></span>
      </button>
      <button className={styles.button}>
        <span className={styles.span}></span>
      </button>
      <button className={styles.button}>
        <span className={styles.span}></span>
      </button>
    </div>
  );
};
