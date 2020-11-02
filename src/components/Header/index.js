import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <span>la</span>tâche
    </div>
  </header>
);

export default Header;
