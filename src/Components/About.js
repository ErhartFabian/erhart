import React from "react";
import './Styles/About.css';
import FadeIn from 'react-fade-in';
import Avatar from '@mui/material/Avatar';
import profile from "../Assets/profile.jpg";

function About() {


    const technologies = [
        "React.js",
        "HTML&CSS",
        "JavaScript",
        "Python",
        "SQL",
        "C++",
        "Git"
    ];
    return (
        <div id="About" >
            <div className="About-info">
                <h1> -&gt; About me</h1>
                <div className="About-top">
                    <p>
                        I am currently interning as a Tester at <b> <a href="https://www.ibm.com/mx-es" target="_blank" rel="noreferrer"  >IBM</a></b>, I have worked as a freelancer performing data updates regarding infections, new cases, covid deaths, and performing covid trend analysis in conjunction with <b><a href="https://www.tpr.org/" target="_blank" rel="noreferrer">Texas Public Radio</a></b>. I am inspired by reading about new and emerging technologies and learning new things.
                    </p>
                    <p>
                        Here are some of the technologies that I have worked with:
                    </p>
                    <ul className="Technologies">
                        {technologies.map(function (tech_item, i) {
                            return (
                                <FadeIn delay={`${i + 1}00ms`} >
                                    <li>{tech_item}</li>
                                </FadeIn>
                            );
                        })}
                    </ul>

                    <p  >
                        Outside of work I like to play video games and watch movies with friends.
                    </p>
                </div>
            </div>
            <Avatar alt="Erhart"
                sx={{
                    borderRadius: "10px",
                    '@media screen and (min-width: 1400px)': {
                        width: "500px",
                        height: "auto",
                    },
                    '@media screen and (max-width: 1024px)': {
                        width: "300px",
                        height: "auto",
                    },
                }}
                variant="rounded"
                src={profile}

            />


        </div>
    );
}
export default About;