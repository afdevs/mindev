import React,{useRef, useEffect} from 'react';
import {TimelineLite, Power3 } from 'gsap';

export default function About() {
    let aboutSection= useRef(null);

    let tl=new TimelineLite({delay: .5});
    useEffect(()=>{
        tl.from(aboutSection, 2,{y: -100, opacity:0, ease: Power3.easeOut} );
    }, [tl]);

    const h2Style={
        marginTop: "4em"
    }
    return (
        <div className="container" ref={el => aboutSection=el}>
            <h2 style={h2Style}>A SAVOIR SUR MINDEV ?</h2>
            <div className="about" >
                <p>
                Nous sommes une startup de développement informatique à Tamatave ayant pour mission de vous accompagner sur vos projets digitaux, de l'étape d'avant projet "web" ou "logiciel" au mise en production du programme.  
                Tout au long de la durée de vie de nos projets communs, nous mettons tout 
                en ouvre pour vous proposer des stratégies digitales efficaces et vous 
                permettre d'atteindre vos objectifs.
                </p>
                <img src="images/logo_mindev.svg" alt="Logo mindev"/>
            </div>
        </div>
    )
}