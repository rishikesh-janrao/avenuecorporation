import Head from "next/head";
import React from "react";
import Sections from "../../Components/Sections";

import styles from "../../styles/Home.module.css";
import pageStyles from "../../styles/Page.module.css";

function OnsitePackagingSolution(props) {
  const bannerDetails = {
    title: "About",
    description: `Engineered industrial packaging firm providing bespoke packaging and design solutions to the worldwide market.`,
    image: "technology.webp",
    alt: "technology banner",
  };
  return (
    <>
      <Head>
        <title>Onsite Packaging Solution</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="pixels/favicon.ico" />
      </Head>
      <div className={`body-sub-container ${pageStyles.container}`}>
        <Sections.PageBanner {...bannerDetails} />
      </div>
    </>
  );
}

export default OnsitePackagingSolution;
