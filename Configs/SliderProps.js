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
        webPath: '/pixels/home-slider/slide-1.webp',
        mobilePath: '',
        alt: 'Avenue Corporation - Home Slider - Slide 1',
      },
      {
        id: 2,
        webPath: '/pixels/home-slider/slide-2.png',
        mobilePath: '',
        alt: 'Avenue Corporation - Home Slider - Slide 2',
      },
      {
        id: 3,
        webPath: '/pixels/home-slider/slide-3.png',
        mobilePath: '',
        alt: 'Avenue Corporation - Home Slider - Slide 3',
      },
      {
        id: 4,
        webPath: '/pixels/home-slider/slide-4.png',
        mobilePath: '',
        alt: 'Avenue Corporation - Home Slider - Slide 4',
      },
      {
        id: 5,
        webPath: '/pixels/home-slider/slide-5.png',
        mobilePath: '',
        alt: 'Avenue Corporation - Home Slider - Slide 5',
      },
    ],
  },
  SliderClientProps: {
    props: {
      effect: 'coverflow',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: '3',
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
