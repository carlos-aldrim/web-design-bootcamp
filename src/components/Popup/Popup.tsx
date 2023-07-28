import React from "react";
import { useStyles } from "./Popup.styles";

interface PopupProps {
  isPopupOpen: boolean;
  onClick?: () => void;
}

export const Popup: React.FC<PopupProps> = ({ isPopupOpen, onClick }) => {
  const styles = useStyles();

  return (
    <>
      <button className={styles.button} onClick={onClick} type="button">
        Open Modal
      </button>
      <div
        className={`${styles.modalBackground} ${
          isPopupOpen ? styles.modalBackgroundOpen : ""
        }`}
        onClick={onClick}
      ></div>
      <div className={`${styles.modal} ${isPopupOpen ? styles.modalOpen : ""}`}>
        <h2>Modal Window</h2>
        <p>
          You have opened the modal, they are great for displaying critical
          informations or confirming actions!
        </p>
      </div>
    </>
  );
};
