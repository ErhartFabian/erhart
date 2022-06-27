import React from "react";
import './Styles/About.css';
import FadeIn from 'react-fade-in';
import Avatar from '@mui/material/Avatar';
import { motion, useViewportScroll, useTransform } from "framer-motion";

function About() {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1.3], [0.2, 1.2]);

    

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
        <div className="About" >
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
            <div className="image">
                <motion.div
                    style={{ scale }}
                >
                   <Avatar alt="Erhart"
                    sx={{
                        width: 450,
                        height: 450,
                        borderRadius: "15px",
                    }}
                    variant="rounded"
                    src="https://scontent.fmex30-1.fna.fbcdn.net/v/t39.30808-6/279899993_10160067715567002_5457589522178300173_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFYpVlNyzL_-kGx-RAOTmUhCJn6aJoo2kUImfpomijaRXTB33tUD3gjRvT9X7NgfSOaFao0IeyyIT6BPwpQP6_f&_nc_ohc=bOQIJgD0eY8AX8_0Dbz&_nc_ht=scontent.fmex30-1.fna&oh=00_AT_eNnop7iEpxlOwVM7wlOvg9wzeJEHcmqZxBMXVG17a7Q&oe=62BBABDF" />
                </motion.div>
                


            </div>

        </div>
    );
}
export default About;