import React from "react";
import "./Styles/School.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import certification from "../Assets/certification.png";


function School() {

    // arreglo de objetos con campos carrera, años, institución
    const school = [
        {
            mayor: "B.S Information Technologies",
            years: "2017 - 2022",
            institution: "Instituto Tecnológico de Monterrey",
            image: "https://tec.mx/sites/default/files/styles/16_9_campus/public/repositorio/Campus/fachada-campus-hidalgo-universidad.jpg?itok=uddCnjr3"
        },
        {
            mayor: "Specialization in IT Administration",
            years: "2020-2021",
            institution: "Instituto Tecnológico de Monterrey",
            image: "https://tec.mx/sites/default/files/styles/16_9_campus/public/repositorio/Campus/fachada-campus-hidalgo-universidad.jpg?itok=uddCnjr3"
        }
    ]

    const certifications = [
        {
            name: "Scrum Developer Certified (SDC)",
            image: certification,
            period: "2021 - 2024",
            institution: "SCRUMstudy",
        },
        {
            name: "ITIL V4",
            image: certification,
            period: "2020 - NA",
            institution: "PeopleCert",
        },
        {
            name: "Six Sigma Yellow Belt",
            image: certification,
            period: "2022 - NA",
            institution: "6SIGMAstudy",
        }
    ]


    return (
        <div id="School">
            <h1> -&gt; Education & Certifications</h1>
            <div className="School-top">
                {/* imprimir los elementos del arreglo de objetos con la estructura de abajo */}
                <div className="School-top-left">
                    {school.map(function (school_item, i) {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: (i+1) * 1}} 
                                viewport={{ once: true }}
                                delay={`${i + 1}000ms`}
                            >
                                <Card
                                    sx={{
                                        maxWidth: 250,
                                        backgroundColor: "white",
                                        color: "black",
                                        boxShadow: "6px 13px 23px -5px rgb(0 0 0 / 36%)",
                                        borderRadius: "10px",
                                        gap: "40px",
                                        '@media screen and (max-width: 1024px)': {
                                            width: "300px",
                                            height: "auto",
                                        },
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="university"
                                            height="240"
                                            width="40px"
                                            image={school_item.image}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" fontSize={"19px"} component="div">
                                                {school_item.mayor}
                                            </Typography>
                                            <Typography   color="text.primary" >
                                                {school_item.years}
                                            </Typography>
                                            <Typography variant="body2" color="#0A1047" paddingTop={"10px"}>
                                                {school_item.institution}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
                {/* imprimir las certificaciones */}
                <div className="School-top-right">
                    {certifications.map(function (certification_item,i) {
                        return (
                            <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: (i+1) * 0.5 }} 
                            viewport={{ once: true }}
                            delay={`${i + 1}000ms`}

                        >
                            <Card 
                            sx={{
                                display: 'flex',
                                width: "100%",
                                boxShadow: "6px 13px 23px -5px rgb(0 0 0 / 36%)",
                                borderRadius: "10px",
                                '@media screen and (max-width: 1024px)': {
                                    width: "100% ",
                                    height: "auto",
                                },
                            }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{ width: 110 }}
                                    image={certification_item.image}
                                    alt="company"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {certification_item.name}
                                        </Typography>
                                        <Typography component="div" variant="h7z">
                                            certifying entity: {certification_item.institution}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div"  >
                                            {certification_item.period}
                                        </Typography>
                                    </CardContent>

                                </Box>

                            </Card>
                        </motion.div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default School;