import React from "react";
import Header from "../Header/Header";
import Hero from "./Hero";
import LandingImg from "../Home/LandingImg";
import img from "../../Imgs/wedding.jpg";
import wed2 from "../../Imgs/wedding2.jpeg";
import wed4 from "../../Imgs/wedding4.jpeg";
import Collections from "./Collections";
import Footer from "../Footer/Footer";
import PremiumCollection from "./PremiumCollection";

const Featured = () => {
  return (
    <div>
      <Header />
      <LandingImg img={img} text={"Bridals"} />
      <Hero
        title={"Bespoke Bridal Sets"}
        img={wed4}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente voluptatibus, voluptas optio eos ea molestiae, aperiam possimus suscipit pariatur ab quae. Consequatur incidunt"
        }
        btnText={"Explore More"}
      />
      <Hero
        title={"Head Pieces"}
        btnOutline={true}
        reverseOrder={true}
        img={wed2}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente voluptatibus, voluptas optio eos ea molestiae, aperiam possimus suscipit pariatur ab quae. Consequatur incidunt"
        }
        btnText={"Explore More"}
      />
      <Collections />
      <PremiumCollection />
      <Footer />
    </div>
  );
};

export default Featured;
