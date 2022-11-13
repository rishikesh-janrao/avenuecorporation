import React from 'react';
import Sections from '../Components/Sections';

import styles from '../styles/Home.module.css';
import pageStyles from '../styles/Page.module.css';

function about(props) {
  const bannerDetails = {
    title: 'About Avenue Corporation',
    description: `Engineered industrial packaging firm providing bespoke packaging and design solutions to the worldwide market.`,
    image: 'technology.webp',
    alt: 'technology banner',
  };
  return (
    <div className={`body-sub-container ${pageStyles.container}`}>
      <Sections.PageBanner {...bannerDetails} />
    </div>
  );
}

export default about;
