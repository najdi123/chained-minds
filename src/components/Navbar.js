import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import './Navbar.css'
import '../index.css'
import {LanguageContext} from "../context/LanguageContext";

const Navbar = () => {
    const {language, toggleLanguage} = useContext(LanguageContext);
    return (
        <div className="container-fluid center-menu bg-transparent">
            <nav className="navbar navbar-expand-sm">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav container">
                        <li className="nav-item">
                            <Link to="/" className="nav-link pl-2">
                                {language.isEnglish ? language.english.home : language.farsi.home}
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/LeftSidebar" className="nav-link pl-2">
                                {language.isEnglish ? language.english.leftSidebar : language.farsi.leftSidebar}
                            </Link>
                        </li>
                        <li>
                            <Link to="/RightSidebar" className="nav-link pl-2">
                                {language.isEnglish ? language.english.rightSidebar : language.farsi.rightSidebar}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/NoSidebar" className="nav-link pl-2">
                                {language.isEnglish ? language.english.noSidebar : language.farsi.noSidebar}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div onClick={toggleLanguage} className="nav-link pl-2 pointer">
                                {language.isEnglish ? 'فارسی' : 'english'}
                            </div>
                        </li>
                    </div>
                </div>
                < /nav>
        </div>
    );
};

export default Navbar;