import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} AyrtonProfile. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
