import React from 'react';
import TopParallax from "../components/Home Components/TopParallax";
import Section1 from "../components/Home Components/Section1";
import Section2 from "../components/Home Components/Section2";
import BottomParallax from "../components/Home Components/BottomParallax";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="">
            <TopParallax/>
            <Section1/>
            <Section2/>
            <BottomParallax/>
            <Footer/>
        </div>
    );
};

export default Home;