import React, { useState } from "react";
import { FaHome, FaFolderOpen, FaUserFriends, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>AyrtonDev</h1>

      {/* Botão do menu mobile (hambúrguer) */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        <FaBars />
      </button>

      {/* Navegação Desktop */}
      <nav className={styles.navDesktop}>
        <a onClick={() => handleNavigation("/")} className={styles.navItem}>
          <FaHome /> Home
        </a>
        <a onClick={() => handleNavigation("/about")} className={styles.navItem}>
          <FaUserFriends /> Sobre
        </a>
        <a onClick={() => handleNavigation("/project")} className={styles.navItem}>
          <FaFolderOpen /> Projetos
        </a>
        <a onClick={() => handleNavigation("/profile")} className={styles.navItem}>
          <FaEnvelope /> Contato
        </a>
      </nav>

      {/* Menu Mobile - Overlay */}
      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ""}`} onClick={closeMenu}>
        <nav className={`${styles.navMobile} ${menuOpen ? styles.open : ""}`} onClick={(e) => e.stopPropagation()}>
          
          {/* Botão X para fechar - DENTRO do menu */}
          <button className={styles.closeButton} onClick={closeMenu}>
            <FaTimes />
          </button>

          <a onClick={() => handleNavigation("/")} className={styles.navItemMobile}>
            <FaHome /> Home
          </a>
          <a onClick={() => handleNavigation("/about")} className={styles.navItemMobile}>
            <FaUserFriends /> Sobre
          </a>
          <a onClick={() => handleNavigation("/project")} className={styles.navItemMobile}>
            <FaFolderOpen /> Projetos
          </a>
          <a onClick={() => handleNavigation("/profile")} className={styles.navItemMobile}>
            <FaEnvelope /> Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;