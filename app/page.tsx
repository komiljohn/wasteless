"use client";

import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
import HeroSection from "./component/Hero";
import Banner from "./component/Hero/Banner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Banner />
      <AboutUs />
      <Footer />
    </div>
  );
}
