import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import HomeContext from '../Contexts/HomeContext';

import navbarStyles from '../styles/Navbar.module.css';
import styles from '../styles/Layout.module.css';

function HamburgerNavbar(props) {
  const homeContext = useContext(HomeContext);
  return (
    <>
      <div
        className={`hamChange-z-index ${styles.hamMenu} ${
          homeContext.state.hamClicked ? styles.hamMenuChange : ''
        }`}
      ></div>
      <ul
        className={`hamList ${navbarStyles.hamList} ${
          homeContext.state.hamClicked ? navbarStyles.hamListHidden : ''
        }`}
      >
        <li
          className={navbarStyles.hamListItem}
          onClick={() => homeContext.setHamClicked(false)}
        >
          <Link href='/'> Home </Link>
        </li>
        <li
          className={navbarStyles.hamListItem}
          onClick={() => homeContext.setHamClicked(false)}
        >
          <Link href='/about'> About us </Link>
        </li>
        <li className={navbarStyles.hamListItem}>
          <Link href='/services'> Solutions </Link>
        </li>
        <li
          className={`${navbarStyles.hamListItem} ${navbarStyles.tabletView}`}
        >
          <Link href='/sustainability'> Sustainability </Link>
        </li>
        <li
          className={`${navbarStyles.hamListItem} ${navbarStyles.tabletView}`}
        >
          <Link href='/technology'>Technology</Link>
        </li>
        <li className={navbarStyles.hamListItem}>
          <Link href='/contact'>Contact Us</Link>
        </li>
      </ul>
    </>
  );
}

export default HamburgerNavbar;
