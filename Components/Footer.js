import { useRouter } from "next/router";
import footerStyles from "../styles/Footer.module.css";
import Sections from "./Sections";
import { useContext } from "react";
import NavigationContext from "../Contexts/NavigationContext";

function Footer(props) {
  const router = useRouter();
  const { siteConfig } = useContext(NavigationContext);
  return (
    <>
      {router.route != "/" && (
        <Sections.MeetOurClients showClientSlider={false} />
      )}
      <Sections.FooterLinks />
      <footer id="copyright" className={footerStyles.footer}>
        <a href="#copyright">
          <span>© Copyright 2022 {siteConfig.name}.&nbsp;</span>
          <span>All rights reserved.</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;
