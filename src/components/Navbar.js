import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import './Navbar.css'
import '../index.css'
import {LanguageContext} from "../context/LanguageContext";

const Navbar = () => {
    const {language, toggleLanguage} = useContext(LanguageContext);
    return (
        <nav className="navbar navbar-expand-sm  bg-transparent topnav-centered">
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
                        <Link to="/" className="nav-link">
                            {language.isEnglish ? language.english.home : language.farsi.home}
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/LeftSidebar" className="nav-link">
                            {language.isEnglish ? language.english.leftSidebar : language.farsi.leftSidebar}
                        </Link>
                    </li>
                    <li>
                    <Link to="/RightSidebar" className="nav-link">
                        {language.isEnglish ? language.english.rightSidebar : language.farsi.rightSidebar}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/NoSidebar" className="nav-link">
                        {language.isEnglish ? language.english.noSidebar : language.farsi.noSidebar}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link onClick={toggleLanguage} className="nav-link">
                        {language.isEnglish ? 'فارسی' : 'english'}
                    </Link>
                </li>
            </div>
        </div>
        < /nav>
        // <nav>
        //     {console.log(language)}
        //     <ul className="nav bg-transparent topnav-centered">
        //         <li className="nav-item ml-5">
        //             <Link to="/" className="nav-link" >
        //                 {language.isEnglish ? language.english.home : language.farsi.home}
        //             </Link>
        //         </li>
        //         <li className="nav-item ">
        //             <Link to="/LeftSidebar" className="nav-link" >
        //                 {language.isEnglish ? language.english.leftSidebar : language.farsi.leftSidebar}
        //             </Link>
        //         </li>
        //         <li className="nav-item ">
        //             <Link to="/RightSidebar" className="nav-link" >
        //                 {language.isEnglish ? language.english.rightSidebar : language.farsi.rightSidebar}
        //             </Link>
        //         </li>
        //
        //         <li className="nav-item">
        //             <Link to="/NoSidebar" className="nav-link" >
        //                 {language.isEnglish ? language.english.noSidebar : language.farsi.noSidebar}
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link onClick={toggleLanguage} className="nav-link">
        //                 {language.isEnglish ? 'فارسی' : 'english'}
        //             </Link>
        //         </li>
        //     </ul>
        // </nav>


    );
};

export default Navbar;