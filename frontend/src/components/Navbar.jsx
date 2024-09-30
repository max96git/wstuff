import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Hexanoid</a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/marketplace">
            <a>Marketplace</a>
          </Link>
        </li>
        <li>
          <Link href="/sell">
            <a>Sell Items</a>
          </Link>
        </li>
        <li>
          <Link href="/account">
            <a>Account</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
