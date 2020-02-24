import React, {useContext} from 'react';
import "./Parallax.css"
import {LanguageContext} from "../../context/LanguageContext";

const TopParallax = () => {
    const { language } = useContext(LanguageContext);
    return (

        <div className="bottom-parallax jumbotron">
            <h1 className="parallax-text3">
                {language.isEnglish ? language.english.text_3_1 : language.farsi.text_3_1}
            </h1>
            <h6 className="parallax-text4">
                {language.isEnglish ? language.english.text_3_2 : language.farsi.text_3_2}
            </h6>

        </div>
    );
};

export default TopParallax;