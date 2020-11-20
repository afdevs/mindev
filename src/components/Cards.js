import React, {useRef, useEffect} from 'react';
import {TimelineLite, Power3 } from 'gsap';

export default function Cards(props) {
    
    let cardsButton= useRef(null);
    let cardContentThumbnails= useRef(null);

    const tl = new TimelineLite({delay: .5});
    useEffect(()=>{
        tl.from(cardsButton, 1.1, {
            x: -40, opacity:0, ease: Power3.easeOut
        }, .4)
        .from(cardContentThumbnails, 1.1, {
            x: -40, opacity:0, ease: Power3.easeOut
        }, .3);
    }, [tl]);


    const {link, content, backgroundColor, imageName}= props.data;
    const styleBackgroundColor={
        backgroundColor: backgroundColor
    }
    
    return (
        <div className="offers-content">
            <div className="card-content">
                <div className="card-content-thumbnail" style={styleBackgroundColor} ref={el => cardContentThumbnails =el}>
                        <img src={"images/"+imageName} alt="Web solution - thumbnail" />
                </div>
                {content}
            </div>
            <div className="card-footer" ref={el=> cardsButton= el}>
                <a href={"/"+link} className="btn-card btn-success" style={styleBackgroundColor} title="En savoir plus sur cette offre">EN SAVOIR +</a>
            </div>            
        </div>
    )
}
