import React from "react";
import { useStyles } from "./Navbar.styles";
import { Menu } from "@mui/icons-material";

interface NavbarProps {
  isNavbarOpen: boolean;
  onClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isNavbarOpen, onClick }) => {
  const styles = useStyles();

  return (
    <>
      <nav className={styles.navbar}>
        <div
          className={`${styles.overlay} ${
            isNavbarOpen ? styles.openOverlay : ""
          }`}
          onClick={onClick}
        ></div>

        <button
          className={`${styles.button} ${styles.burger}`}
          type="button"
          onClick={onClick}
        >
          <Menu />
        </button>

        <h1 className={styles.title}>AsmrProg</h1>
        <nav
          className={`${styles.menu} ${isNavbarOpen ? styles.openMenu : ""}`}
        >
          <button type="button" className={`${styles.button} ${styles.active}`}>
            Youtube
          </button>
          <button type="button" className={`${styles.button} ${styles.active}`}>
            Archive
          </button>
          <button type="button" className={styles.button}>
            Projects
          </button>
        </nav>
      </nav>
    </>
  );
};
