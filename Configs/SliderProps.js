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
        delay: 2600,
        disableOnInteraction: false,
      },
      navigation: true,
      className: "homeSwiper",
    },
    slides: [
      {
        id: 1,
        webPath: "/pixels/home-slider/slide-5.png",
        mobilePath: "",
        slideText: "India's Leading Green Packaging Company",
        alt: "Home Slider - Slide 1",
      },
      {
        id: 2,
        webPath: "/pixels/home-slider/slide-2.png",
        mobilePath: "",
        slideText: "Innovative and Sustainable Packaging Solutions",
        alt: "Home Slider - Slide 2",
      },
      {
        id: 3,
        webPath: "/pixels/home-slider/slide-3.png",
        mobilePath: "",
        slideText: "Automotive & Containerization",
        alt: "Home Slider - Slide 3",
      },
      {
        id: 4,
        webPath: "/pixels/home-slider/slide-4.png",
        mobilePath: "",
        slideText: " E-commerce Packaging Solutions",
        alt: "Home Slider - Slide 4",
      },
      // {
      //   id: 5,
      //   webPath: '/pixels/home-slider/slide-5.png',
      //   mobilePath: '',
      //   slideText:"",
      //   alt: 'Home Slider - Slide 5',
      // },
    ],
  },
  SliderClientProps: {
    props: {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "3",
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
      className: "clientSwiper",
    },
    slides: [
      {
        id: 1,
        path: "/pixels/clients/jcb.png",
        alt: "Clients Slider - Slide 1",
      },
      {
        id: 2,
        path: "/pixels/clients/nefab.png",
        alt: "Clients Slider - Slide 2",
      },
      {
        id: 3,
        path: "/pixels/clients/rieter.png",
        alt: "Clients Slider - Slide 3",
      },
      {
        id: 4,
        path: "/pixels/clients/philips.png",
        alt: "Clients Slider - Slide 4",
      },
      {
        id: 5,
        path: "/pixels/clients/lg.png",
        alt: "Clients Slider - Slide 5",
      },
      {
        id: 6,
        path: "/pixels/clients/glatt.png",
        alt: "Clients Slider - Slide 6",
      },
      {
        id: 7,
        path: "/pixels/clients/mellanox.png",
        alt: "Clients Slider - Slide 7",
      },
      {
        id: 8,
        path: "/pixels/clients/toshiba.png",
        alt: "Clients Slider - Slide 8",
      },
      {
        id: 9,
        path: "/pixels/clients/ksb.png",
        alt: "Clients Slider - Slide 9",
      },
      {
        id: 10,
        path: "/pixels/clients/delval.png",
        alt: "Clients Slider - Slide 10",
      },
      {
        id: 11,
        path: "/pixels/clients/vikrash.png",
        alt: "Clients Slider - Slide 11",
      },
      {
        id: 12,
        path: "/pixels/clients/tetrapak.png",
        alt: "Clients Slider - Slide 12",
      },
      {
        id: 13,
        path: "/pixels/clients/bharatforge.png",
        alt: "Clients Slider - Slide 13",
      },
      {
        id: 14,
        path: "/pixels/clients/otif.png",
        alt: "Clients Slider - Slide 14",
      },
      {
        id: 15,
        path: "/pixels/clients/konecranes.png",
        alt: "Clients Slider - Slide 15",
      },
      {
        id: 16,
        path: "/pixels/clients/emerson.png",
        alt: "Clients Slider - Slide 16",
      },
      {
        id: 17,
        path: "/pixels/clients/sandvik.png",
        alt: "Clients Slider - Slide 17",
      },
    ],
  },
  SliderGallaryDesktopProps: {
    props: {
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "3",
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: true,
      className: "gallarySwiper",
    },
    slides: [
      {
        id: 1,
        path: "/pixels/clients/jcb.png",
        alt: "Clients Slider - Slide 1",
      },
      {
        id: 2,
        path: "/pixels/clients/nefab.png",
        alt: "Clients Slider - Slide 2",
      },
      {
        id: 3,
        path: "/pixels/clients/rieter.png",
        alt: "Clients Slider - Slide 3",
      },
      {
        id: 4,
        path: "/pixels/clients/philips.png",
        alt: "Clients Slider - Slide 4",
      },
      {
        id: 5,
        path: "/pixels/clients/lg.png",
        alt: "Clients Slider - Slide 5",
      },
      {
        id: 6,
        path: "/pixels/clients/glatt.png",
        alt: "Clients Slider - Slide 6",
      },
      {
        id: 7,
        path: "/pixels/clients/mellanox.png",
        alt: "Clients Slider - Slide 7",
      },
      {
        id: 8,
        path: "/pixels/clients/toshiba.png",
        alt: "Clients Slider - Slide 8",
      },
      {
        id: 9,
        path: "/pixels/clients/ksb.png",
        alt: "Clients Slider - Slide 9",
      },
      {
        id: 10,
        path: "/pixels/clients/delval.png",
        alt: "Clients Slider - Slide 10",
      },
      {
        id: 11,
        path: "/pixels/clients/vikrash.png",
        alt: "Clients Slider - Slide 11",
      },
      {
        id: 12,
        path: "/pixels/clients/tetrapak.png",
        alt: "Clients Slider - Slide 12",
      },
      {
        id: 13,
        path: "/pixels/clients/bharatforge.png",
        alt: "Clients Slider - Slide 13",
      },
      {
        id: 14,
        path: "/pixels/clients/otif.png",
        alt: "Clients Slider - Slide 14",
      },
      {
        id: 15,
        path: "/pixels/clients/konecranes.png",
        alt: "Clients Slider - Slide 15",
      },
      {
        id: 16,
        path: "/pixels/clients/emerson.png",
        alt: "Clients Slider - Slide 16",
      },
      {
        id: 17,
        path: "/pixels/clients/sandvik.png",
        alt: "Clients Slider - Slide 17",
      },
    ],
  },
  SliderGallaryMobileProps: {
    props: {
      slidesPerView: "1",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 2600,
        disableOnInteraction: false,
      },
      navigation: true,
      className: "homeSwiper",
    },
    slides: [
      {
        id: 1,
        path: "/pixels/clients/jcb.png",
        alt: "Clients Slider - Slide 1",
      },
      {
        id: 2,
        path: "/pixels/clients/nefab.png",
        alt: "Clients Slider - Slide 2",
      },
      {
        id: 3,
        path: "/pixels/clients/rieter.png",
        alt: "Clients Slider - Slide 3",
      },
      {
        id: 4,
        path: "/pixels/clients/philips.png",
        alt: "Clients Slider - Slide 4",
      },
      {
        id: 5,
        path: "/pixels/clients/lg.png",
        alt: "Clients Slider - Slide 5",
      },
      {
        id: 6,
        path: "/pixels/clients/glatt.png",
        alt: "Clients Slider - Slide 6",
      },
      {
        id: 7,
        path: "/pixels/clients/mellanox.png",
        alt: "Clients Slider - Slide 7",
      },
      {
        id: 8,
        path: "/pixels/clients/toshiba.png",
        alt: "Clients Slider - Slide 8",
      },
      {
        id: 9,
        path: "/pixels/clients/ksb.png",
        alt: "Clients Slider - Slide 9",
      },
      {
        id: 10,
        path: "/pixels/clients/delval.png",
        alt: "Clients Slider - Slide 10",
      },
      {
        id: 11,
        path: "/pixels/clients/vikrash.png",
        alt: "Clients Slider - Slide 11",
      },
      {
        id: 12,
        path: "/pixels/clients/tetrapak.png",
        alt: "Clients Slider - Slide 12",
      },
      {
        id: 13,
        path: "/pixels/clients/bharatforge.png",
        alt: "Clients Slider - Slide 13",
      },
      {
        id: 14,
        path: "/pixels/clients/otif.png",
        alt: "Clients Slider - Slide 14",
      },
      {
        id: 15,
        path: "/pixels/clients/konecranes.png",
        alt: "Clients Slider - Slide 15",
      },
      {
        id: 16,
        path: "/pixels/clients/emerson.png",
        alt: "Clients Slider - Slide 16",
      },
      {
        id: 17,
        path: "/pixels/clients/sandvik.png",
        alt: "Clients Slider - Slide 17",
      },
    ],
  },
};

export default SliderProps;
