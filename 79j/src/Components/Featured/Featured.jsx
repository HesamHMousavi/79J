import React from "react";
import Header from "../Header/Header";
import LandingImg from "../Home/LandingImg";
import img1 from "../../Imgs/wedding3.jpeg";
import img2 from "../../Imgs/wedding1.jpeg";
import img3 from "../../Imgs/wedding2.jpeg";
import Collections from "./Collections";
import Footer from "../Footer/Footer";
import PremiumCollection from "./PremiumCollection";
import Section from "./Section";
import TextCCC from "./TextCCC";
import Rings from "./Rings";
import FooterText from "./FooterText";

const Featured = () => {
  return (
    <div>
      <Header />
      <LandingImg
        images={[img1, img3, img2]}
        text={"Timeless Bridals & Diamonds"}
      />
      <Section />
      <TextCCC />
      <Rings />
      <FooterText />
      <Collections />
      <PremiumCollection />
      <Footer />
    </div>
  );
};

export default Featured;
