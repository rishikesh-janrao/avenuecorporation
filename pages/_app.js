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
import { SiteConfig } from "../Configs/CONSTANTS";
import ServicesManager from "../Modules/services";
import ThirdPartyServices from "../Modules/thirdParty";

const parser = new UAParser();
const os = parser.getOS();
const osName = os.name?.toLowerCase();
const IsMobile = osName === "ios" || osName === "android";
let locationStatus = "";

let timer = null;
function scheduleBot(IsBotActivated, setIsBotActivated) {
  if (!timer && !IsBotActivated) {
    timer = setTimeout(() => setIsBotActivated(true), 5000);
  } else {
    clearTimeout(timer);
    timer = null;
  }
}

function App({ Component, pageProps, router }) {
  const { setServer, setTrackRecord } = ServicesManager();
  const { getLocationData } = ThirdPartyServices();
  const [hamClicked, setHamClicked] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalDetails, setModal] = useState({});
  const [IsBotActivated, setIsBotActivated] = useState(false);
  // const [IsMobile, setIsMobile] = useState(osName === "ios" || osName === "android");
  const currentPageId = MenuList.find(
    (el) => el.name == router.pathname.replace("/", "")
  )?.id;
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    currentPageId ? currentPageId : 1
  );
  const [siteConfig, setSiteConfig] = useState(SiteConfig.avenue_corporation);
  const [ip, setIp] = useState("");
  const [coords, setCoords] = useState({});

  const {
    SliderHomePageProps,
    SliderClientProps,
    SliderGallaryDesktopProps,
    SliderGallaryMobileProps,
  } = SliderProps;

  const onScroll = useCallback((event) => {
    setScrollY(window.pageYOffset > 5);
  }, []);
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup

    if (location) {
      //sets backend server from here based on the domain its currently hosted on
      setServer(location.origin);

      //sets site config based on current domain
      const hostname = location.host.split(".")[0];
      switch (hostname) {
        case "avenuecorporation":
          setSiteConfig(SiteConfig.avenue_corporation);
          break;
        case "avenuepacks":
          setSiteConfig(SiteConfig.avenue_packs);
          break;
      }

      //get location data for client
      if (navigator && locationStatus === "") {
        let clientData = {
          name: "",
          email: "",
          browserName: navigator.appName,
          platform: navigator.platform,
          userAgent: navigator.userAgent,
          ip: "",
          origin: siteConfig.domain,
          coordinates: {},
        };
        const saveTracks = () => {
          getLocationData()
            .then(({ ip }) => {
              if (ip && location) {
                let formattedIP = ip.replace(
                  /[&\/\\#, +()$~%.'":*?<>{}]/g,
                  "_"
                );
                setIp(formattedIP);
                clientData.ip = formattedIP;
                const timestamp = Date.now();

                //set tracker record for every visit
                setTrackRecord({
                  payload: {
                    clientData,
                    timestamp,
                  },
                  params: {
                    action: "ADD",
                  },
                }).then((res) => {
                  locationStatus = "SAVED";

                  const interval = setInterval(() => {
                    const timestamp = Date.now();

                    //set tracker record for every visit
                    setTrackRecord({
                      payload: {
                        clientData,
                        timestamp,
                      },
                      params: {
                        action: "ADD",
                      },
                    }).then((res) => {
                      locationStatus = "SAVED";
                    });
                  }, 60000);
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        };
        const successCallback = (data) => {
          clientData.coordinates = {
            lat: ""+data.coords.latitude,
            long: ""+data.coords.longitude,
          };
          setCoords(clientData.coordinates)
          saveTracks();
        };

        const errorCallback = (error) => {
          console.log(error);
          saveTracks();
        };

        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
        locationStatus = "PENDING";
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

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
        siteConfig: siteConfig,
        state: {
          ip: ip,
          coords:coords
        },
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
          SliderGallaryMobileProps: SliderGallaryMobileProps,
          SliderGallaryDesktopProps: SliderGallaryDesktopProps,
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
          onLoad={() => scheduleBot(IsBotActivated, setIsBotActivated)}
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
                alt="ChatBot Logo"
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
