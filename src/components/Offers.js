import React, {useRef, useEffect} from 'react';
import Cards from './Cards';
import {TimelineLite, Power3 } from 'gsap';

export default function Offers() {    
    let cards1= useRef(null);
    let cards2= useRef(null);
    let webSolTitle= useRef(null);

    const tl= new TimelineLite({delay: .5});
    useEffect(()=>{
        tl.staggerFrom(webSolTitle, 1,
            {
                y: -40,
                opacity:0,
                ease: Power3.easeOut,
                delay: .8
            },
            .15
        );

        tl.from(cards1, 1.2, {y: 150, opacity:0, ease: Power3.easeOut}, .1)
        .from(cards2, 1.2, {y:150, opacity:0, ease: Power3.easeOut}, .5)
    }, [tl]);

    const h2Style={
        marginBottom: "2em"
    }
    
    const styleBorder1={
        border:"solid 3px #0E6B38"
    }
    const cardContent1= {
        link: "web-solution",
        content: (<div className="card-content-text"  style={styleBorder1} ref={el=> cards1= el}>
        <h3 >WEB SOLUTIONS</h3>
        <p>
        Notre agence vous accompagne dans la conception et mis en place d'une stratégie marketing pour vos 
        produits ou tout autre besoin spécifique sur internet. <br/> <br/>

        Nos développeurs maitrises parfaitement les
        principaux CMS du marché et peuvent vous 
        accompagner sur vos projets de création comme migrations de sites. <br/> <br/>

        Nos consultons vos accompagnent depuis la phase d'audit de l'existant, redaction de votre cahier decharge etc... jusqu'au déploiement de celle-ci. <br/>
        </p>
    </div>),        
        backgroundColor: "#0E6B38",
        imageName: "site_vitrine_responsive.png"
    }
        
    
    const styleBorder2={
        border:"solid 3px #2273A2"
    }
    const cardContent2= {
        link: "enterprise-solution",
        content: (<div className="card-content-text" style={styleBorder2} ref={el=> cards2= el} >
        <h3>ENTERPRISE SOLUTIONS</h3>
            Avec cette offre, nous vous proposons de faire une 
        étude approfondie de votre entreprise (Particulier, 
        Startup et PME) et voir où nos compétences peuvent 
        intervenir dans l'optimisation de votre travail.
        <br/> <br/>

        Ce qu'on vous propose en quelque mot :
        <ul>
            <li>Développement de logiciel</li> 
            <li>Accompagnement sur la mise en place d'un 
                structure informatique dans l'entreprise</li> 
            <li>Formation des employés</li> 
            <li>Et d'autres encore...</li> 
        </ul>
        <br/>
    </div>),
        backgroundColor: "#2273A2",
        imageName: "illustration_UploadToOD.png"
    }
    
    
    return (
        <div className="container">
            <h2 style={h2Style} ref={el=> webSolTitle= el} >NOS SERVICES</h2>
            <div className="offers" id="ourOffers" >
                <Cards data={cardContent1} key={1} />
                <Cards data={cardContent2} key={2} />
            </div>            
        </div>
    )
}
