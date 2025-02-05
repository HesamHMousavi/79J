import React, { useEffect } from "react";
import Grid from "../Grid/Grid";
import ImgHeader from "../ImgHeader/ImgHeader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Other from "../Other/Other";
import "./ItemsPage.css";

const ItemsPage = ({ title, Img }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rings-page">
      <Header />
      <ImgHeader img={Img} />
      <h1 className="title-2">{title}</h1>
      <Grid />
      <Other />
      <Footer />
    </div>
  );
};

export default ItemsPage;
