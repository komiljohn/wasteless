"use client";

import AboutOurActivities from "./component/AboutOurActivities";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
import FromWasteToNewProducts from "./component/FromWasteToNewProducts";
import HeroSection from "./component/Hero";
import Banner from "./component/Hero/Banner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Banner />
      <AboutUs />
      <AboutOurActivities />
      <FromWasteToNewProducts />
      <Footer />
    </div>
  );
}
