import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <h2 className={styles.navTitle}>Seller Hub</h2>
      <ul className={styles.navList}>
          <li><Link to="/" className={styles.itemList}>Home</Link></li>
          <li><Link to="/estoque" className={styles.itemList}>Estoque</Link></li>
          <li><Link to="/financeiro" className={styles.itemList}>Financeiro</Link></li>
      </ul>
    </nav>
  )
}
