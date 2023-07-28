import React from "react";
import { useStyles } from "./ResizableFooterPage.styles";
import { Footer } from "components";

export const ResizableFooterPage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Footer />
    </div>
  );
};
