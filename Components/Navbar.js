import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import HomeContext from "../Contexts/HomeContext";
import NavigationContext from "../Contexts/NavigationContext";

import navbarStyles from "../styles/Navbar.module.css";

function Navbar(props) {
  const homeContext = useContext(HomeContext);
  const navContext = useContext(NavigationContext);

  const [hamClicked, setHamClicked] = useState(false);

  useEffect(() => {
    homeContext.setHamClicked(hamClicked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hamClicked]);

  useEffect(() => {
    setHamClicked(homeContext.state.hamClicked);
  }, [homeContext.state.hamClicked]);
  return (
    <header className={navbarStyles.container}>
      {homeContext.isMobile ? (
        <div className={navbarStyles.logo}>
          <Image
            src="/pixels/logo/white-bg.png"
            alt="Logo"
            layout="responsive"
            width={80}
            height={42}
          />
        </div>
      ) : (
        <div className={navbarStyles.logo}>
          <Image
            src="/pixels/logo/blue-bg.png"
            alt="Logo"
            layout="responsive"
            width={80}
            height={42}
          />
        </div>
      )}
      <nav className={navbarStyles.menu}>
        <ul className={navbarStyles.list}>
          {navContext.menuList.map((menuItem) => (
            <li
              key={menuItem.id}
              className={`${navbarStyles.listItem} ${
                menuItem.id == navContext.selectedMenuItem
                  ? navbarStyles.activeMenuItem
                  : ""
              } ${menuItem.classes} ${menuItem.isDisabled ? "is-hidden" : ""}`}
              onClick={() => navContext.setSelectedMenuItem(menuItem.id)}
            >
              {menuItem.subMenu.length > 0 ? (
                <SubMenu {...menuItem} />
              ) : (
                <Link href={menuItem.path}>
                  <a>{menuItem.description}</a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`hamburger-container ${navbarStyles.hamburgerContainer} ${
          hamClicked ? navbarStyles.change : ""
        }`}
        onClick={() => setHamClicked(!hamClicked)}
      >
        <div
          className={`${navbarStyles.hamburgerLine} ${
            hamClicked ? navbarStyles.change1 : ""
          } `}
        ></div>
        <div
          className={`${navbarStyles.hamburgerLine} ${
            hamClicked ? navbarStyles.change2 : ""
          } `}
        ></div>
        <div
          className={`${navbarStyles.hamburgerLine} ${
            hamClicked ? navbarStyles.change3 : ""
          } `}
        ></div>
      </div>
    </header>
  );
}
export default Navbar;

function SubMenu({ id, description, name, path, subMenu }) {
  const navContext = useContext(NavigationContext);
  return (
    <div className={navbarStyles.subMenuTitle}>
      <a href={path}>
        {description}
        <span className={navbarStyles.arrow}>
          <span className={navbarStyles.arrowLine1}></span>
          <span className={navbarStyles.arrowLine2}></span>
        </span>
      </a>
      <ul
        className={`${navbarStyles.subMenu} ${
          navContext.scrollY ? navbarStyles.subMenuScrollHide : ""
        }`}
      >
        {subMenu.map((item) => (
          <li key={item.id}>
            <Link href={path + item.path}>
              <a>{item.description}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
