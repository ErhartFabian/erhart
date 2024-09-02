import React from "react";
import './Styles/Side.css';
import FadeIn from 'react-fade-in';

function Side() {
    const links = [
        <a href="#Intro">/home</a>,
        <a href="#About">/about</a>,
        <a href="#School">/school</a>,
        <a href="#Experience">/experience</a>,
    ]


    return (
        <div className="Side">
            {/* lista que me lleva a las secciones de intro, about, school y experiece */}
            {links.map((link, index) => (
                <FadeIn delay={`${index + 1}000ms`} >
                    <div className="links">{link}</div>
                </FadeIn>
            ))}
           
        </div>
    );
    }
export default Side;