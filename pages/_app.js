import Layout from "../Components/Layout";
import { UAParser } from "ua-parser-js";
import HomeContext from "../Contexts/HomeContext";
import { useCallback, useEffect, useState } from "react";

import "../styles/globals.css";
import "../styles/z.index.css";
import NavigationContext from "../Contexts/NavigationContext";
import MenuList from "../Configs/MenuItems";
import SocialLinks from "../Configs/SocialLinks";
import { motion } from "framer-motion";
import SliderProps from "../Configs/SliderProps";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const parser = new UAParser();
const os = parser.getOS();
const osName = os.name?.toLowerCase();
const IsMobile = osName === "ios" || osName === "android";

function App({ Component, pageProps, router }) {
  const [hamClicked, setHamClicked] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalDetails, setModal] = useState({});
  const [IsBotActivated, setIsBotActivated] = useState(false);

  const currentPageId = MenuList.find(
    (el) => el.name == router.pathname.replace("/", "")
  )?.id;
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    currentPageId ? currentPageId : 1
  );

  const { SliderHomePageProps, SliderClientProps } = SliderProps;

  const onScroll = useCallback((event) => {
    setScrollY(window.pageYOffset > 5);
  }, []);

  let timer = null;
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  const scheduleBotActivation = ()=> {
    timer = setInterval(() => setIsBotActivated(true), 5000);
  }
  return (
    <NavigationContext.Provider
      value={{
        menuList: MenuList,
        selectedMenuItem: selectedMenuItem,
        setSelectedMenuItem: setSelectedMenuItem,
        socialLinks: SocialLinks,
        scrollY: scrollY,
        isModalVisible: isModalVisible,
        setModalVisible: setModalVisible,
        modalDetails: modalDetails,
        setModal: setModal,
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
          window: typeof window === "undefined" ? null : window,
        }}
      >
        <Layout>
          <Head>
            <link rel="icon" href="../pixels/favicon.ico" />
            <link rel="apple-touch-icon" href="/example.png" />
            <meta name="theme-color" content="#0095DA" />
          </Head>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
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

        <div
          className={`bot ${IsBotActivated ? "active" : ""}`}
          onLoad={scheduleBotActivation()}
        >
          <div className="bot-holder__left">
            <span
              className="bot-text"
              onClick={() => {
                setIsBotActivated(false);
              }}
            >
              <Link href={"/#ContactForm"}>
                <a>Tell us your requirements</a>
              </Link>
            </span>
          </div>
          <div className="bot-holder__right">
            {!IsBotActivated && (
              <Image
                src="/pixels/logo/bot-logo.png"
                alt="Avenue Corporation ChatBot Logo"
                layout="responsive"
                width={100}
                height={100}
              />
            )}
          </div>
        </div>
      </HomeContext.Provider>
    </NavigationContext.Provider>
  );
}

export default App;
