import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Avatar from "react-avatar";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLayout}>
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="logo"
          width={300}
          height={100}
          className={styles.logo}
        />
        <div className={styles.rightHeaderLayout}>
          <form className={styles.form}>
            <input type="text" placeholder="Search" className={styles.input} />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Roshin" round color="#0055D1" size="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;
