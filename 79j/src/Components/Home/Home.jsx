import React from "react";
import Header from "../Header/Header";
import LandingImg from "./LandingImg";
import Featured from "./Featured";
import ImgPre from "./ImgPre";
import img from "../../Imgs/necless-long.png";
import img2 from "../../Imgs/bra-long.png";
import img3 from "../../Imgs/ring-long.png";
import ScrollItems from "./ScrollItems";
import HeroHome from "./HeroHome";
import TestimonialSlider from "./TestimonialSlider";
import BusinessInfo from "./BusinessInfo";
import Footer from "../Footer/Footer";
import ContactForm from "./ContactForm";
import imgStore from "../../Imgs/store2.jpeg";

const Home = () => {
  return (
    <div>
      <Header />
      <LandingImg img={imgStore} text={"79 JEWELERS"} />
      <Featured />
      <ImgPre img={img} name="Necklace Collection" link="/necklaces" />
      <ScrollItems />
      <ImgPre img={img2} name="Ball Bracelet" link="/bracelets" />
      <HeroHome />
      <ImgPre img={img3} name="Rings Collection" link="/rings" />
      <TestimonialSlider />
      <BusinessInfo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
