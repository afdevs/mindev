import React,{useRef, useEffect} from 'react';
import {TimelineLite, Power3 } from 'gsap';

export default function Engagement() {    
    let engagements= useRef(null);
    let values= useRef(null);
    let engagementAndValueTitle= useRef(null);

    let tl=new TimelineLite({delay: .5});
    useEffect(()=>{
        tl.staggerFrom(engagementAndValueTitle, 1,
            {
                y: -40,
                opacity:0,
                ease: Power3.easeOut,
                delay: .8
            },
            .1
        );

        tl.from(engagements, 0.8,{y: -200, opacity:0, ease: Power3.easeOut}, .6)
        .from(values, 0.9,{y: -200, opacity:0, ease: Power3.easeOut}, .7)
    }, [tl]);

    const h2Style={
        marginBottom: "2em"
    }
    return (
        <div className="container">     
        <h2 style={h2Style} ref={el=> engagementAndValueTitle=el}>NOS VALEURS ET ENGAGEMENTS</h2>       
            <div className="engagementAndValue" id="ourEngagementAndValue">
                <div className="engagement" ref={el=> engagements= el}>
                    <ul>
                        <li>Ouverture, honnêteté et transparence.</li>
                        <li>Respect de nos collaborateurs.</li>
                        <li>Relèves des défis, recherche constant d'améliorations et être un bon exemple.  </li>
                        <li>Etre constamment en veille technologique</li>
                        <li>Nous encourageant le partage, la socialisation, l'esprit d'équipe et l'épanouissement ensemble.</li>
                    </ul>
                </div>
                <div className="value" ref={el=> values=el}>
                    <ul>
                        <li>Production de vrai résultat à nos clients.</li>
                        <li>Offrir le meilleur pour nos clients.</li>
                        <li>Etre flexible par rapport au possibilité de nos clients. </li>
                        <li>Assurer le support client</li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}
