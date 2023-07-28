import React from "react";
import { useStyles } from "./Footer.styles";
import { Instagram, FacebookOutlined, Twitter } from "@mui/icons-material";

export const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div>
              <h6 className={styles.title}>Microsoft Store</h6>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    About
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    Careers
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    Affiliates
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className={styles.title}>Microsoft Store</h6>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    About
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    Careers
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    Affiliates
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className={styles.title}>Microsoft Store</h6>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    About
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    Careers
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    Affiliates
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="#" className={styles.link}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className={styles.divider} />
          <div className={styles.bottom}>
            <span>&copy; 2022 AsmrProg. All rights reserved.</span>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  <Instagram className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  <FacebookOutlined className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  <Twitter className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
