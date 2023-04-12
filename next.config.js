/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    firebaseConfig: {
      apiKey: "AIzaSyCAEO_CSKavBmJl4PLTala-aEg9S7SChTA",
      authDomain: "avenue-corporation.firebaseapp.com",
      databaseURL: "https://avenue-corporation-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "avenue-corporation",
      storageBucket: "avenue-corporation.appspot.com",
      messagingSenderId: "452051543044",
      appId: "1:452051543044:web:2d48aa53089f91109ac151"
    },
  },
};

module.exports = nextConfig;
