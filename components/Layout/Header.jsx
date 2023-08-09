import React from "react";
import styles from "./Header.module.css";
import Avatar from "react-avatar";
import LinkIcon from "@mui/icons-material/Link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLayout}>
        <h1>Todo App</h1>
        <div className={styles.rightHeaderLayout}>
          <h3>Roshin</h3>
          <Avatar name="Roshin" round color="#FA7070" size="50" />
          <a
            className={styles.socialLinks}
            href="mailto:roshinchaya@gmail.com"
            target="_blank"
          >
            <LinkIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
