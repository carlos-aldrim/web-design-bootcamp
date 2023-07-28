import React from "react";
import { Popup } from "components";
import { useStyles } from "./ModernPopupPage.styles";

export const ModernPopupPage: React.FC = () => {
  const styles = useStyles();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const togglePopup = () => setIsPopupOpen((prevState) => !prevState);

  return (
    <div className={styles.container}>
      <Popup onClick={togglePopup} isPopupOpen={isPopupOpen} />
    </div>
  );
};
