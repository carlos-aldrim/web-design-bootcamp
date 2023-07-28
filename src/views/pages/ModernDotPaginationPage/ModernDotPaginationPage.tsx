import React from "react";
import { DotPagination } from "components";
import { useStyles } from "./ModernDotPaginationPage.styles";

export const ModernDotPaginationPage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <DotPagination />
    </div>
  );
};
