import React, {useContext} from 'react';
import './Section1.css'
import {LanguageContext} from "../../context/LanguageContext";

import pic1 from '../../images/cafegame.png';
import pic2 from '../../images/rosha.png';
import pic3 from '../../images/pic03.jpg';
import pic4 from '../../images/pic04.jpg';

const Section1 = () => {
    const {language} = useContext(LanguageContext);
    return (
        <div className="section2">
            <div className="jumbotron jumbotron-bg">
                <h1 className="text-title">
                    {language.isEnglish ? language.english.text_2_0 : language.farsi.text_2_0}
                </h1>
            </div>

            <hr className="seperator"/>

            <div className="section-1 row row2 container-fluid pb-5">
                <div className="col-sm-12 col-md-6 text-center pt-5">
                    <img src={pic1} alt="" className="col-12"/>
                    <h5 className="text-title2 p-3">
                        {language.isEnglish ? language.english.text_2_1 : language.farsi.text_2_1}
                    </h5>
                    <p className="text-regular p-3">
                        {language.isEnglish ? language.english.text_2_2 : language.farsi.text_2_2}
                    </p>

                </div>
                <div className="col-sm-12 col-md-6 text-center pt-5">
                    <img src={pic2} alt="" className="col-12"/>
                    <h5 className="text-title2 p-3">
                        {language.isEnglish ? language.english.text_2_3 : language.farsi.text_2_3}
                    </h5>
                    <p className="text-regular p-3">
                        {language.isEnglish ? language.english.text_2_4 : language.farsi.text_2_4}
                    </p>

                </div>
                <div className="col-sm-12 col-md-6 text-center pt-5">
                    <img src={pic3} alt="" className="col-12"/>
                    <h5 className="text-title2 p-3">
                        {language.isEnglish ? language.english.text_2_5 : language.farsi.text_2_5}
                    </h5>
                    <p className="text-regular p-3">
                        {language.isEnglish ? language.english.text_2_6 : language.farsi.text_2_6}
                    </p>

                </div>
                <div className="col-sm-12 col-md-6 text-center pt-5">
                    <img src={pic4} alt="" className="col-12"/>
                    <h5 className="text-title2 p-3">
                        {language.isEnglish ? language.english.text_2_7 : language.farsi.text_2_7}
                    </h5>
                    <p className="text-regular p-3">
                        {language.isEnglish ? language.english.text_2_8 : language.farsi.text_2_8}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Section1;