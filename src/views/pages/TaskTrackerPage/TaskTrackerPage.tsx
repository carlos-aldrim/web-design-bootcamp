import React from "react";
import { useStyles } from "./TaskTrackerPage.styles";
import { ColumnTask } from "components";

export const TaskTrackerPage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.body}>
      <h2 className={styles.h2}>Task Tracker</h2>
      <div className={styles.container}>
        <ColumnTask title={"Backlog"} count={8} />
        <ColumnTask title={"Ready"} count={9} />
        <ColumnTask title={"Delog"} count={4} />
        <ColumnTask title={"Review"} count={2} />
      </div>
    </div>
  );
};
