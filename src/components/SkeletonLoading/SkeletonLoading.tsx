import React from "react";
import { useStyles } from "./SkeletonLoading.styles";

interface SkeletonLoadingProps {
  theme: {
    palette: {
        gradient: string;
        background: string;
        cardBackground: string;
        header: string;
        info: string;
        boxShadow: string;
    };
  };
  loading: boolean;
};

export const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({ theme, loading }) => {
  const styles = useStyles();

  return (
    <>
      {!!loading ? (
        <div style={{ background: theme.palette.background,boxShadow: theme.palette.boxShadow }} className={styles.card}>
          <div className={styles.image}>
            <img src="https://a-static.besthdwallpaper.com/river-landscape-wallpaper-2800x2100-81127_28.jpg" alt="" />
          </div>
          <a
            href="#"
            style={{ color: theme.palette.header }}
            className={styles.header}
          >
            Card Title Here
          </a>
          <p
            style={{ color: theme.palette.info }}
            className={styles.info}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem necessitatibus omnis corrupti
            facere distinctio sapiente tempore aperiam, iste numquam ut quas atque nam corporis architecto vel error
            perferendis aut.
          </p>
        </div>
      ) : (
        <div style={{ background: theme.palette.background,boxShadow: theme.palette.boxShadow }} className={styles.card}>
          <div
            style={{ backgroundImage: theme.palette.gradient }}
            className={styles.loadingImage}
          />
          <div
            style={{ backgroundImage: theme.palette.gradient }}
            className={styles.loadingHeader}
          />
          <div
            style={{ backgroundImage: theme.palette.gradient }}
            className={styles.loadingInfo}
          />
        </div>
      )}
    </>
  );
};
