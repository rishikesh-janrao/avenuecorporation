const SliderProps = {
  SliderHomePageProps: {
    props: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: true,
      className: 'homeSwiper',
      delay: 200,
    },
    slides: [
      {
        id: 1,
        path: 'https://econovus.co.in/wp-content/uploads/2022/03/New-1-3-scaled.jpg',
        alt: 'Avenue Corporation - Home Slider - Slide 1',
      },
      {
        id: 2,
        path: '/pixels/eco-friendly-packaging.jpeg',
        alt: 'Avenue Corporation - Home Slider - Slide 2',
      },
      {
        id: 3,
        path: '/pixels/home-page-slider-1.jpeg',
        alt: 'Avenue Corporation - Home Slider - Slide 3',
      },
      {
        id: 4,
        path: 'https://econovus.co.in/wp-content/uploads/2022/03/New-1-3-scaled.jpg',
        alt: 'Avenue Corporation - Home Slider - Slide 4',
      },
    ],
  },
  SliderClientProps: {
    props: {
      effect: 'coverflow',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: '4',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      className: 'clientSwiper',
    },
    slides: [
      {
        id: 1,
        path: '/pixels/clients/gm.png',
        alt: 'Avenue Corporation - Clients Slider - Slide 1',
      },
      {
        id: 2,
        path: '/pixels/clients/jaguar.png',
        alt: 'Avenue Corporation - Clients Slider - Slide 2',
      },
      {
        id: 3,
        path: '/pixels/clients/land-rover.png',
        alt: 'Avenue Corporation - Clients Slider - Slide 3',
      },
      {
        id: 4,
        path: '/pixels/clients/magneti.png',
        alt: 'Avenue Corporation - Clients Slider - Slide 4',
      },
      {
        id: 5,
        path: '/pixels/clients/mahindra.png',
        alt: 'Avenue Corporation - Clients Slider - Slide 5',
      },
      {
        id: 6,
        path: '/pixels/clients/mk-tron.png',
        alt: 'Avenue Corporation - Clients Slider - Slide 6',
      },
      {
        id: 7,
        path: '/pixels/clients/ohsung.png',
        alt: 'Avenue Corporation - Clients Slider - Slide 7',
      },
    ],
  },
};

export default SliderProps;
