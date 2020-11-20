import React,{useRef, useEffect} from 'react';
import {TimelineLite, Power3 } from 'gsap';
import { Link } from 'react-scroll';

export default function BannerHome() {
    let bannerHome= useRef(null);
    const tl= new TimelineLite({delay: .3});
    useEffect(()=>{
        tl.from(bannerHome, 1.1, {y: -150, opacity:0, ease: Power3.easeOut}, .1);
    }, [tl]);

    const styleContainerBottomBar={
        paddingTop: "10em"
    }
    return (
        <div className="container" style={styleContainerBottomBar} ref={el=> bannerHome=el}>
            <h1>NOUS VOUS ACCOMPAGNONS DANS</h1>
              <div className="content">
                  <div className="content-left">
                    <ul>
                        <li>
                        L'analyse et l'élaboration d'une stratégie digital pour atteindre vos objectifs.
                        </li>
                        <li>
                        La mise en place d'une solution web pour vos produits, publicités, entreprise etc...
                        </li>
                        <li>
                        Le choix et le développement d'une solution logiciel en interne pour votre compagnie.
                        </li>
                    </ul>
                </div>
                <div className="content-right">
                    <h2>
                    ON VOUS MET A DISPOSITION UNE EQUIPE D'EXPERT POUR TROUVER LA MEILLEURE SOLUTION POUR VOUS.
                    </h2>
                    <Link
                    activeClass=""
                    className="btn btn-success"
                    to="ourOffers"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    title="Voir nos propositions"
                    >
                        NOS PROPOSITIONS
                    </Link>
                </div>
            </div>
        </div>
    )
}
