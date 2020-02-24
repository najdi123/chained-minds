import React, {useContext} from 'react';
import '../index.css';
import {LanguageContext} from "../context/LanguageContext";

const Footer = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="footer pb-">
            <h1 className="text-center p-5">
                {language.isEnglish ? language.english.text_4_1 : language.farsi.text_4_1}
            </h1>
            <h2 className="text-center p-2">{language.isEnglish ? language.english.text_4_2 : language.farsi.text_4_2}</h2>
            <h1 className="d-block-inline text-center pb-5">
                <i className="fab fa-twitter p-3" aria-hidden="true"></i>
                <i className="fab fa-facebook-f p-3" aria-hidden="true"></i>
                <i className="fab fa-dribbble p-3" aria-hidden="true"></i>
                <i className="fab fa-tumblr p-3" aria-hidden="true"></i>
            </h1>
            <hr className="seperator"/>
            <h5 className="text-center bottom-brand pt-3">Chained minds &#169; {new Date().getFullYear()}</h5>
        </div>
    );
};

export default Footer;