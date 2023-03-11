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

import swiperStyles from '../styles/Swiper.module.css';
import Link from 'next/link';
import Image from 'next/image';

function SwiperSlider(props) {
  const { SliderHomePageProps, SliderClientProps, SliderGallaryDesktopProps, SliderGallaryMobileProps } = useContext(HomeContext);
  return (
    <>
      {props.HomeSlider && (
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          {...SliderHomePageProps.props}
        >
          {SliderHomePageProps.slides.map((slide) => (
            <div key={slide.id}>
              <SwiperSlide key={slide.id}>
                <div className='slideText'>
                  <h1>{slide.slideText}</h1>
                </div>
                <span className={swiperStyles.ImageContainer}>
                  <Image
                    src={slide.webPath}
                    alt={slide.alt}
                    layout='fill'
                    priority
                  />
                  {/* <img
                    className={swiperStyles.Image}
                    src={slide.webPath}
                    alt={slide.alt}
                  /> */}
                </span>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      )}
      {props.ClientsSlider && (
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          {...SliderClientProps.props}
        >
          {SliderClientProps.slides.map((el) => (
            <SwiperSlide key={el.id}>
              <Image
                src={el.path}
                alt={el.alt}
                layout='fill'
              />
              {/* <img src={el.path} alt={el.alt} /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {props.GallaryMobileSlider && (
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          {...SliderGallaryMobileProps.props}
        >
          {SliderClientProps.slides.map((el) => (
            <SwiperSlide key={el.id}>
              <Image
                src={el.path}
                alt={el.alt}
                layout='fill'
              />
              {/* <img src={el.path} alt={el.alt} /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {props.GallaryDesktopSlider && (
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          {...SliderGallaryDesktopProps.props}
        >
          {SliderClientProps.slides.map((el) => (
            <SwiperSlide key={el.id}>
              <Image
                src={el.path}
                alt={el.alt}
                layout='fill'
              />
              {/* <img src={el.path} alt={el.alt} /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default SwiperSlider;
