import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';

import { IoMenu  } from "react-icons/io5";

export default function Navbar() {

  const [menu, setMenu] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <h2 className={styles.navTitle}>Seller Hub</h2>
        <button
          className={menu ? `${styles.menuButton} ${styles.menuButtonOpen}` : styles.menuButton}
          onClick={() => setMenu(!menu)}
        >
          <IoMenu />
        </button>
        <ul className={menu ? `${styles.navList} ${styles.navListOpen}` : styles.navList} >
            <li><Link to="/" className={styles.itemList} onClick={() => setMenu(false)}>Home</Link></li>
            <li><Link to="/products" className={styles.itemList} onClick={() => setMenu(false)}>Produtos</Link></li>
            <li><Link to="/Finances" className={styles.itemList} onClick={() => setMenu(false)}>Financeiro</Link></li>
        </ul>
      </nav>
    </header>
  )
}
