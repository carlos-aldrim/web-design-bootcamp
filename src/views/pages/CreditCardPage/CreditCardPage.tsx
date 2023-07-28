import React from "react";
import { CreditCard } from "components";
import { useStyles } from "./CreditCard.styles";

export const CreditCardPage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <CreditCard />
    </div>
  );
};
