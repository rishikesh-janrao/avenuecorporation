import { useRouter } from 'next/router';
import footerStyles from '../styles/Footer.module.css'
import Sections from './Sections';


function Footer(props) {
  const router = useRouter();
  return (
    <>
    {router.route != '/' && (<Sections.MeetOurClients showClientSlider={false}/>)}
    <Sections.FooterLinks />
    <footer className={footerStyles.footer}>
      <a>
        <span>© Copyright 2022 Avenue Corporation.&nbsp;</span> 
        <span>All rights reserved.</span>
      </a>
    </footer>
    </>
  );
}

export default Footer;
