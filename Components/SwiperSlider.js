/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HomeContext from '../Contexts/HomeContext';

// import swiperStyles from '../styles/Swiper.module.css';

function SwiperSlider(props) {
  const {SliderHomePageProps, SliderClientProps} = useContext(HomeContext);
  return (
    <>
      {props.HomeSlider && (
        <Swiper modules={[Autoplay, Pagination, Navigation]} {...SliderHomePageProps.props}>
          {SliderHomePageProps.slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.webPath} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {props.ClientsSlider && (
        <Swiper modules={[Autoplay, Pagination, Navigation, EffectCoverflow]} {...SliderClientProps.props}>
          {SliderClientProps.slides.map((el) => (
            <SwiperSlide key={el.id}>
              <img src={el.path} alt={el.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default SwiperSlider;
