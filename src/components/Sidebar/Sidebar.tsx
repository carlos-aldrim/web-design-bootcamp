import React from "react";
import { useStyles } from "./Sidebar.styles";
import Logo from "assets/img/logo.png";
import {
  Menu,
  Home,
  PersonOutline,
  Settings,
  GridView,
  Speaker,
  Storage,
  MusicNote,
  Folder,
  Shield,
} from "@mui/icons-material";

interface SidebarProps {
  isSidebarOpen: boolean;
  onClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onClick, isSidebarOpen }) => {
  const styles = useStyles();

  return (
    <>
      <nav
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
      >
        <div className={styles.inner}>
          <header className={styles.header}>
            <button className={styles.burger} type="button" onClick={onClick}>
              <Menu className={styles.svg} />
            </button>
            <img
              className={`${styles.logo} ${
                isSidebarOpen ? styles.logoOpen : ""
              }`}
              src={Logo}
              alt=""
            />
          </header>

          <nav className={styles.menu}>
            <button className={styles.button} type="button">
              <Home className={styles.svg} />
              <span
                className={`${styles.span} ${
                  isSidebarOpen ? styles.spanOpen : ""
                }`}
              >
                Home
              </span>
            </button>
            <button className={styles.button} type="button">
              <PersonOutline className={styles.svg} />
              <span
                className={`${styles.span} ${
                  isSidebarOpen ? styles.spanOpen : ""
                }`}
              >
                Accounts
              </span>
            </button>
            <button className={styles.button} type="button">
              <Settings className={styles.svg} />
              <span
                className={`${styles.span} ${
                  isSidebarOpen ? styles.spanOpen : ""
                }`}
              >
                Settings
              </span>
            </button>
            <button className={styles.button} type="button">
              <GridView className={styles.svg} />
              <span
                className={`${styles.span} ${
                  isSidebarOpen ? styles.spanOpen : ""
                }`}
              >
                Blockchain
              </span>
            </button>
            <button className={styles.button} type="button">
              <Storage className={styles.svg} />
              <span
                className={`${styles.span} ${
                  isSidebarOpen ? styles.spanOpen : ""
                }`}
              >
                Databases
              </span>
            </button>
            <button className={styles.button} type="button">
              <Speaker className={styles.svg} />
              <span
                className={`${styles.span} ${
                  isSidebarOpen ? styles.spanOpen : ""
                }`}
              >
                AudioVibe
              </span>
            </button>
            <button className={styles.button} type="button">
              <MusicNote className={styles.svg} />
              <span
                className={`${styles.span} ${
                  isSidebarOpen ? styles.spanOpen : ""
                }`}
              >
                Soundblast
              </span>
            </button>
            <button className={styles.button} type="button">
              <Folder className={styles.svg} />
              <span
                className={`${styles.span} ${
                  isSidebarOpen ? styles.spanOpen : ""
                }`}
              >
                Folders
              </span>
            </button>
            <button className={styles.button} type="button">
              <Shield className={styles.svg} />
              <span
                className={`${styles.span} ${
                  isSidebarOpen ? styles.spanOpen : ""
                }`}
              >
                Security
              </span>
            </button>
          </nav>
        </div>
      </nav>
    </>
  );
};
