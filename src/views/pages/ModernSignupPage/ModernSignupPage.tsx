import React from "react";
import { useStyles } from "./ModernSignupPage.styles";
import { Signup } from "components";

export const ModernSignupPage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <Signup />
    </div>
  );
};
