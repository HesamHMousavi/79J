import React from "react";
import Header from "../Header/Header";
import LandingImg from "./LandingImg";
import Featured from "./Featured";
import ImgPre from "./ImgPre";
import img from "../../Imgs/necless-long.png";
import img2 from "../../Imgs/longOne.jpeg";
import img3 from "../../Imgs/ring-long.png";
import ScrollItems from "./ScrollItems";
import HeroHome from "./HeroHome";
import TestimonialSlider from "./TestimonialSlider";
import BusinessInfo from "./BusinessInfo";
import Footer from "../Footer/Footer";
import ContactForm from "./ContactForm";
import imgStore1 from "../../Imgs/store.jpeg";
import imgStore2 from "../../Imgs/79shop2.jpeg";
import imgStore3 from "../../Imgs/store2.jpeg";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Header />
      <LandingImg
        images={[imgStore1, imgStore3, imgStore2]}
        text={"79 JEWELLERS"}
      />
      <Featured />
      <ImgPre img={img} name="Necklace Collection" link="/necklaces" />
      <ScrollItems />
      <ImgPre img={img2} name="Ball Bracelet" link="/bracelets" />
      <HeroHome />
      <ImgPre img={img3} name="Rings Collection" link="/rings" />
      <About />
      <TestimonialSlider />
      <BusinessInfo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
