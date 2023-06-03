import React from "react";
import Navbar from "../components/Navabar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroTwo from "../components/HeroTwo/HeroTwo";
import AboutContent from "../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo heading="ABOUT." text="I'm a full stack developer." />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
