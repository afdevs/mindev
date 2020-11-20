import React from 'react'

export default function Footer() {
    const footeNetworksStyle={
        facebookAndTwitter:{
            marginRight: "8px",
            width:"22px"
        },
        linkedin:{
            marginRight: "10px",
            width:"18px",
            marginLeft: "2px"
        }
    }
    return (        
        <div>
            <div className="footer">
                <div className="footer-offers">
                    <h3>NOS OFFRES DANS</h3>
                    <div className="offers-links">
                    <a href="/web-solution" title="Web solution">Web solutions</a>
                    <a href="/enterprise-solution" title="Enterprise solution">Enterprise solutions</a>

                    </div>
                </div>
                <div className="networks">
                    <h3>RETROUVEZ-NOUS SUR</h3>
                    <div className="networks-links">                   
                        <a href="#" title="Facebook" title="Voir sur Facebook"><img src="images/app_icons_facebook@2x.svg" alt="Facebook icon" style={footeNetworksStyle.facebookAndTwitter} /> Facebook</a>
                        <a href="#" title="Linkedin" title="Voir sur Linkedin"><img src="images/app_icons_linkedin@2x.svg" alt="Facebook icon" style={footeNetworksStyle.linkedin} />  Linkedin</a>
                        <a href="#" title="Voir sur Instagram"><img src="images/app_icons_instagram@2x.svg" alt="Facebook icon" style={ footeNetworksStyle.facebookAndTwitter} />  Instagram</a>
                    </div>

                </div>
                <div className="logoAndContact">
                    <div className="logo"><a href="#" title="Logo mindev"><img src="images/logo_mindev.svg" width="100" alt="Logo mindev"></img></a></div>
                    <a href="mailto:contact@mindev.mg" title="Envoyer un mail">contact@mindev.mg</a>
                    <div className="phonenumber">
                    +261 32 71 380 74
                    </div>
                </div>
            </div>            
            <div className="copyright">
                © Copyright Mindev 2020, tous droits réservés.
            </div>
        </div>
    )
}
