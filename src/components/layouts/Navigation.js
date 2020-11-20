import React from 'react';
import { Link } from 'react-scroll';

export default function Navigation() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-navigation">
                    <div className="logo"><a href="/" title="Logo mindev"><img src="images/logo_mindev.svg" width="60" alt="Logo mindev"></img></a></div>
                    <nav className="navigation">                        
                        <a href="/" title="Page d'accueil">Accueil</a>
                        {/* <a href="#ourOffers" title="Nos services">Nos services</a> */}
                        {/* <a href="#ourEngagementAndValue" title="Pourquoi-nous ?">Pourquoi nous ?</a> */}
                        {/* <a href="#contactUs" title="Contact">Contact</a> */}
                        <Link
                        activeClass="active"
                        to="ourOffers"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        title="Nos services"
                        >
                            Nos services
                        </Link>
                        <Link
                        activeClass="active"
                        to="ourEngagementAndValue"
                        spy={true}
                        smooth={true}
                        offset={-190}
                        duration={500}
                        title="Pourquoi-nous ?"
                        >
                            Pourquoi nous ?
                        </Link>
                        <Link
                        activeClass="active"
                        to="contactUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        title="Contact"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>                
            </div>  
        </div>
    )
}
