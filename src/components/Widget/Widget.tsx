import React from "react";
import { useStyles } from "./Widget.styles";
import {
  HomeOutlined,
  LockOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

export const Widget: React.FC = () => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabClick = (tab: number) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.widget}>
      <div className={styles.tabs}>
        <input
          className={styles.input}
          type="radio"
          name="group"
          id="tab-1"
          checked={selectedTab === 0}
          onClick={() => handleTabClick(0)}
        />
        <input
          className={styles.input}
          type="radio"
          name="group"
          id="tab-2"
          checked={selectedTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <input
          className={styles.input}
          type="radio"
          name="group"
          id="tab-3"
          checked={selectedTab === 2}
          onClick={() => handleTabClick(2)}
        />

        <div className={styles.buttons}>
          <label
            htmlFor="tab-1"
            className={`${styles.symbols} ${
              selectedTab === 0 ? styles.selectedSymbols : ""
            }`}
          >
            <HomeOutlined />
          </label>
          <label
            htmlFor="tab-2"
            className={`${styles.symbols} ${
              selectedTab === 1 ? styles.selectedSymbols : ""
            }`}
          >
            <LockOutlined />
          </label>
          <label
            htmlFor="tab-3"
            className={`${styles.symbols} ${
              selectedTab === 2 ? styles.selectedSymbols : ""
            }`}
          >
            <SettingsOutlined />
          </label>
          <div
            className={styles.underline}
            style={{ translate: `calc(64px * ${selectedTab}) 0` }}
          ></div>
        </div>

        <div className={styles.content}>
          <div
            className={styles.inner}
            style={{ translate: `calc(0px - (300px * ${selectedTab})) 0` }}
          >
            <div className={styles.session}>
              <h2 className={styles.title}>Home</h2>
              <p className={styles.description}>Tab Widget Home Contents!</p>
            </div>
            <div className={styles.session}>
              <h2 className={styles.title}>Accounts</h2>
              <p className={styles.description}>
                Tab Widget Accounts Contents!
              </p>
            </div>
            <div className={styles.session}>
              <h2 className={styles.title}>Setting</h2>
              <p className={styles.description}>Tab Widget Setting Contents!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
