import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import Location from "../components/Location";


const Home = () => {
  return (
    <div>
        <Header />
        <HomeBanner />
        <Location />
        <Footer />
    </div>
  );
};

export default Home;
