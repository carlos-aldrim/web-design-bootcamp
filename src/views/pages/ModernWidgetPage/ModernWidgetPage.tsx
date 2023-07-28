import React from "react";
import { useStyles } from "./ModernWidgetPage.styles";
import { Widget } from "components";

export const ModernWidgetPage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Widget />
    </div>
  );
};
