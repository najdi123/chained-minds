import React, {useContext} from 'react';
import './Section1.css'
import {LanguageContext} from "../../context/LanguageContext";

const Section1 = () => {
    const {language} = useContext(LanguageContext);
    return (
        <div>
            <div className="jumbotron">
                <h1 className="text-title">
                    {language.isEnglish ? language.english.text1 : language.farsi.text1}
                </h1>
                <p className="text-regular">
                    {language.isEnglish ? language.english.text2 : language.farsi.text2}
                 </p>
            </div>

            <div className="section-1 row container-fluid pb-5">
                <div className="col-sm-12 col-md-6 col-lg-4 text-center pt-5">
                    <i className="fa fa-gamepad p-3" aria-hidden="true"></i>
                    <h5 className="text-title2 p-3">
                        {language.isEnglish ? language.english.text3 : language.farsi.text3}
                    </h5>
                    <p className="text-regular p-3">
                        {language.isEnglish ? language.english.text4 : language.farsi.text4}
                    </p>
                    <button className="read-more">
                        {language.isEnglish ? language.english.text5 : language.farsi.text5}
                    </button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-center pt-5">
                    <i className="fa fa-mobile p-3" aria-hidden="true"></i>
                    <h5 className="text-title2 p-3">
                        {language.isEnglish ? language.english.text6 : language.farsi.text6}
                    </h5>
                    <p className="text-regular p-3">
                        {language.isEnglish ? language.english.text7 : language.farsi.text7}
                    </p>
                    <button className="read-more">
                        {language.isEnglish ? language.english.text8 : language.farsi.text8}
                    </button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-center pt-5">
                    <i className="fa fa-laptop p-3" aria-hidden="true"></i>
                    <h5 className="text-title2 p-3">
                        {language.isEnglish ? language.english.text9 : language.farsi.text9}
                    </h5>
                    <p className="text-regular p-3">
                        {language.isEnglish ? language.english.text10 : language.farsi.text10}
                    </p>
                    <button className="read-more">
                        {language.isEnglish ? language.english.text11 : language.farsi.text11}
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Section1;