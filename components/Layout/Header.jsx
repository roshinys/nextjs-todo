import React from "react";
import styles from "./Header.module.css";
import Avatar from "react-avatar";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLayout}>
        <h1>Todo App</h1>
        <div className={styles.rightHeaderLayout}>
          <h3>Roshin</h3>
          <Avatar name="Roshin" round color="#0055D1" size="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;
