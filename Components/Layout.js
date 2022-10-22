import { useContext } from 'react';
import HomeContext from '../Contexts/HomeContext';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import HamburgerNavbar from './HamburgerNavbar';
import Navbar from './Navbar';

const Layout = ({ children }) => {

  const value = useContext(HomeContext);
  
  function closeHam(){
    value.state.hamClicked ? value.setHamClicked(false):""
  }
  return (
    <div className={styles.container} onClick={closeHam}>
      <HamburgerNavbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
