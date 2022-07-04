import React from "react";
import "./Styles/Intro.css";
import Avatar from '@mui/material/Avatar';
import FadeIn from 'react-fade-in';
import Typewriter from "typewriter-effect";

function Intro() {



    return (
        <div id="Intro">

            <div className="Intro-top">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi")
                            .pauseFor(1000)
                            /* .deleteAll() */
                            .typeString(",<b>Erhart</b> here!.")
                            .start();
                    }}
                />
                <Avatar alt="Erhart"
                    sx={{
                        width: 150,
                        height: 150,
                        marginLeft: "10px"
                    }}
                    src="https://media-exp2.licdn.com/dms/image/C5603AQH3J-SWKHdWeA/profile-displayphoto-shrink_800_800/0/1650680783161?e=1661385600&v=beta&t=ioMrVsWGdHkLlxsCh-1x9kljTGG2TOcuMmT_qqVpM1o" />
            </div>
            <div className="Intro-bottom">

                <FadeIn transitionDuration={1000} delay={1800}>
                    <p>I'm Erhart an IT Engineer with a specialization in IT administration, I hold certifications in <b>SCRUM (SDC) and ITIL frameworks.</b> With experience as a jr consultant in web development with React. I stand out for my skills of communication, leadership, continuous learning, teamwork and creativity.</p>
                </FadeIn>
            </div>
        </div >

    );
}

export default Intro;