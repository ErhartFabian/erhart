import React from "react";
import "./Styles/Experience.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import ibm from "../Assets/IBM.png";


function Experience() {
    // experience objects
   

    return (
        <div id="Experience">
            <h1>->Experience</h1>
            <div className="Experience-info">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    delay={`1000ms`}
                >
                    <Card sx={{
                        display: 'flex',
                        maxWidth: 800,
                        maxHeight: 200,
                        marginTop: "35px",
                        marginLeft: "30px",
                        boxSizing: "border-box",
                        boxShadow: "6px 13px 23px -5px rgb(0 0 0 / 36%)",
                        borderRadius: "10px",
                        border: "none",
                    }}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: 200,
                            }}
                            image={ibm}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                Tester Intern
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                june 2022 - Present
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                Training and coaching in the following technologies: <br/>Agile Methodologies <br/>ISTQB Methodology <br/> Java Core
                                </Typography>
                            </CardContent>

                        </Box>

                    </Card>
                </motion.div>

            </div>
        </div>
    );

}
export default Experience;