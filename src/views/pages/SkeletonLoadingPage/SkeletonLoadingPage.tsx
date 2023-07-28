import React from "react";
import { useStyles } from "./SkeletonLoadingPage.styles";
import { darkTheme, lightTheme } from "config/theme";
import { SkeletonLoading } from "components";

export const SkeletonLoadingPage: React.FC = () => {
  const styles = useStyles();
  const [darkMode, setDarkMode] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const theme = darkMode ? lightTheme : darkTheme;

  React.useEffect(() => {
    setInterval(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <button
        style={{
          background: theme.palette.background,
          boxShadow: theme.palette.boxShadow,
        }}
        className={styles.toggle}
        onClick={() => setDarkMode((prevState) => !prevState)}
      ></button>
      <SkeletonLoading theme={theme} loading={loading} />
    </div>
  );
};
