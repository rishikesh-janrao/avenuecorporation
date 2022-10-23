import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import HomeContext from '../Contexts/HomeContext';

import navbarStyles from '../styles/Navbar.module.css';
import styles from '../styles/Layout.module.css';
import NavigationContext from '../Contexts/NavigationContext';

function HamburgerNavbar(props) {
  const homeContext = useContext(HomeContext);
  const navContext = useContext(NavigationContext);
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
        {navContext.menuList.map((menuItem) => (
          <li
            key={menuItem.id}
            className={`${navbarStyles.hamListItem} ${
              menuItem.id == navContext.selectedMenuItem
                ? navbarStyles.activeMenuItem
                : ''
            } ${menuItem.classes}`}
            onClick={() => navContext.setSelectedMenuItem(menuItem.id)}
          >
            <Link href={menuItem.path}>
              <a>{menuItem.description}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HamburgerNavbar;
