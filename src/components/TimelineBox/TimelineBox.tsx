import React from "react";
import { useStyles } from "./TimelineBox.styles";

interface TimelineBoxProps {
  type: "primary" | "success" | "danger" | "warning" | "info" | "secondary";
  title: string;
  time: string;
  icon: React.ReactNode;
}

export const TimelineBox: React.FC<TimelineBoxProps> = ({
  type,
  title,
  time,
  icon,
}) => {
  const styles = useStyles();

  const color = [
    { name: "success", color: styles.success },
    { name: "primary", color: styles.primary },
    { name: "danger", color: styles.danger },
    { name: "warning", color: styles.warning },
    { name: "info", color: styles.info },
  ];

  const foundColor = color.find((item) => item.name === type);

  return (
    <div className={styles.box}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.body}>
        <h4 className={styles.header}>
          <span className={`${styles.badge} ${foundColor?.color}`}>
            {title}
          </span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis
          repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam
          culpa, repellendus esse commodi deserunt.
        </p>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
};
