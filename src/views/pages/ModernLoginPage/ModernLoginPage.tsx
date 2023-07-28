import React from "react";
import { useStyles } from "./ModernLoginPage.styles";
import { Login } from "components";

export const ModernLoginPage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
};
