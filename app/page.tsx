"use client";

import AboutOurActivities from "./component/AboutOurActivities";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Download from "./component/Download";
import Footer from "./component/Footer";
import FromWasteToNewProducts from "./component/FromWasteToNewProducts";
import HeroSection from "./component/Hero";
import Banner from "./component/Hero/Banner";
import HowWeWork from "./component/HowWeWork";
import YouTubeBlog from "./component/YouTubeBlog";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Banner />
      <AboutUs />
      <AboutOurActivities />
      <FromWasteToNewProducts />
      <HowWeWork />
      <YouTubeBlog />
      <ContactUs />
      <Download />
      <Footer />
    </div>
  );
}
