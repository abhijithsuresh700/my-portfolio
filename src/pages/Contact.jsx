import React from "react";
import Navbar from "../components/Navabar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroTwo from "../components/HeroTwo/HeroTwo";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo heading="CONTACT." text="Let's have a chat." />
      <Form/>
      <Footer />
    </div>
  );
};

export default Contact;
