import React from "react";
import { useStyles } from "./ColumnTask.styles";
import { Add, CalendarMonth, ChatBubble } from "@mui/icons-material";

interface ColumnTaskProps {
  title: string;
  count: number;
}

export const ColumnTask: React.FC<ColumnTaskProps> = ({ title, count }) => {
  const styles = useStyles();

  return (
    <div className={styles.boxColumn}>
      <div className={styles.boxHeader}>
        <h5>
          {title} <span className={styles.span}>{count}</span>
        </h5>
        <li className={styles.li}>
          <Add className={styles.add} />
        </li>
      </div>

      <div className={styles.box}>
        <span className={`${styles.tag} ${styles.red}`}>Youtube</span>
        <p>
          This is the title of the card for the thing that needs to be done.
        </p>
        <div className={styles.boxFooter}>
          <div className={styles.date}>
            <li>
              <CalendarMonth className={styles.icon} />
            </li>
            <span>8 May</span>
          </div>
          <li className={styles.comment}>
            <ChatBubble className={styles.icon} />
            14
          </li>
        </div>
      </div>

      <div className={styles.box}>
        <span className={`${styles.tag} ${styles.green}`}>Dev</span>
        <p>
          This is the title of the card for the thing that needs to be done.
        </p>
        <div className={styles.boxFooter}>
          <div className={styles.date}>
            <li>
              <CalendarMonth className={styles.icon} />
            </li>
            <span>8 May</span>
          </div>
          <li className={styles.comment}>
            <ChatBubble className={styles.icon} />
            14
          </li>
        </div>
      </div>

      <div className={styles.box}>
        <span className={`${styles.tag} ${styles.yellow}`}>Design</span>
        <p>
          This is the title of the card for the thing that needs to be done.
        </p>
        <div className={styles.boxFooter}>
          <div className={styles.date}>
            <li>
              <CalendarMonth className={styles.icon} />
            </li>
            <span>8 May</span>
          </div>
          <li className={styles.comment}>
            <ChatBubble className={styles.icon} />
            14
          </li>
        </div>
      </div>
    </div>
  );
};
