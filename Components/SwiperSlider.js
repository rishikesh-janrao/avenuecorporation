import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import swiperStyles from '../styles/Swiper.module.css';

function SwiperSlider(props) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='mySwiper'
      delay={200}
    >
      <SwiperSlide>
        <img src='/pixels/home-page-slider-1.jpeg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://econovus.co.in/wp-content/uploads/2022/03/New-1-3-scaled.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/pixels/eco-friendly-packaging.jpeg' />
      </SwiperSlide>
      <SwiperSlide>
        <p>Slide 3</p>
      </SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  );
}

export default SwiperSlider;
