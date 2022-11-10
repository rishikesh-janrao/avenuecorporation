import Layout from '../Components/Layout';
import { UAParser } from 'ua-parser-js';
import HomeContext from '../Contexts/HomeContext';
import { useEffect, useState } from 'react';

import '../styles/globals.css';
import '../styles/z.index.css';
import NavigationContext from '../Contexts/NavigationContext';
import MenuList from '../Configs/MenuItems';
import SocialLinks from '../Configs/SocialLinks';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import SliderProps from '../Configs/SliderProps';
import Head from 'next/head';

const parser = new UAParser();
const os = parser.getOS();
const osName = os.name?.toLowerCase();
const IsMobile = osName === 'ios' || osName === 'android';

function App({ Component, pageProps, router }) {
  const [hamClicked, setHamClicked] = useState(false);
  const currentPageId = MenuList.find(
    (el) => el.name == router.pathname.replace('/', '')
  )?.id;
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    currentPageId ? currentPageId : 1
  );

  const { SliderHomePageProps, SliderClientProps } = SliderProps;

  return (
    <NavigationContext.Provider
      value={{
        menuList: MenuList,
        selectedMenuItem: selectedMenuItem,
        setSelectedMenuItem: setSelectedMenuItem,
        socialLinks: SocialLinks,
      }}
    >
      <HomeContext.Provider
        value={{
          state: {
            hamClicked: hamClicked,
          },
          isMobile: IsMobile,
          platform: osName,
          setHamClicked: setHamClicked,
          SliderHomePageProps: SliderHomePageProps,
          SliderClientProps: SliderClientProps,
        }}
      >
        <Layout>
          <Head>
            <link rel='icon' href='../pixels/favicon.ico' />
            <link rel='apple-touch-icon' href='/example.png' />
            <meta name="theme-color" content="#0095DA"/>
          </Head>
          <motion.div
            key={router.route}
            initial='pageInitial'
            animate='pageAnimate'
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </HomeContext.Provider>
    </NavigationContext.Provider>
  );
}

export default App;
