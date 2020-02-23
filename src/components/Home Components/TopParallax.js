import React, {useContext} from 'react';
import "./Parallax.css"
import Navbar from "../Navbar";
import {LanguageContext} from "../../context/LanguageContext";

const TopParallax = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="top-parallax">
            <Navbar/>
            <h1 className="parallax-text1">
                {language.isEnglish ? language.english.parallaxText1 : language.farsi.parallaxText1}
            </h1>
            <h6 className="parallax-text2">
                {language.isEnglish ? language.english.parallaxText1 : language.farsi.parallaxText2}
            </h6>
        </div>
    );
};

export default TopParallax;