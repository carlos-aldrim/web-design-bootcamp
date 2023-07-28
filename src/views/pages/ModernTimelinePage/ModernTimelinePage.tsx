import React from "react";
import { useStyles } from "./ModernTimelinePage.styles";
import {
  CheckCircle,
  Dangerous,
  Info,
  Mood,
  SentimentSatisfiedAlt,
  Warning,
} from "@mui/icons-material";
import { TimelineBox } from "components";

export const ModernTimelinePage: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.timeline}>
          <TimelineBox
            title={"Primary"}
            type={"primary"}
            time={"1 Hours Ago"}
            icon={<Mood />}
          />
          <TimelineBox
            title={"Success"}
            type={"success"}
            time={"3 Hours Ago"}
            icon={<CheckCircle />}
          />
          <TimelineBox
            title={"Danger"}
            type={"danger"}
            time={"8 Hours Ago<"}
            icon={<Dangerous />}
          />
          <TimelineBox
            title={"Secondary"}
            type={"secondary"}
            time={"1 Days Ago"}
            icon={<SentimentSatisfiedAlt />}
          />
          <TimelineBox
            title={"Warning"}
            type={"warning"}
            time={"3 Days Ago"}
            icon={<Warning />}
          />
          <TimelineBox
            title={"Info"}
            type={"info"}
            time={"6 Days Ago"}
            icon={<Info />}
          />
        </div>
      </div>
    </div>
  );
};
