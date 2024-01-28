import React from "react";
import { Helmet } from "react-helmet-async";
import SliderImage from "../../components/SliderImage";
import Cards from "../../components/Cards";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="home">
        <SliderImage />
        <Cards/>
      </div>
    </>
  );
}

export default Home;
