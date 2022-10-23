import footerStyles from '../styles/Footer.module.css'


function Footer(props) {
  return (
    <footer className={footerStyles.footer}>
      <a>
        <span>© Copyright 2022 Avenue Corporation.&nbsp;</span> 
        <span>All rights reserved.</span>
      </a>
    </footer>
  );
}

export default Footer;
