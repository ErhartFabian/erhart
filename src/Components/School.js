import React from "react";
import "./Styles/School.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { motion } from "framer-motion";
import Box from '@mui/material/Box';


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
            name: "Scrum Developer Certified (SDC) - SCRUMstudy",
            image: "https://www.creativefabrica.com/wp-content/uploads/2019/03/Certificate-icon-by-ahlangraphic.jpg",
            period: "2021 - 2024"
        },
        {
            name: "ITIL V4 - PeopleCert",
            image: "https://www.creativefabrica.com/wp-content/uploads/2019/03/Certificate-icon-by-ahlangraphic.jpg",
            period: "2020 - NA"
        },
        {
            name: "Six Sigma Yellow Belt - 6SIGMAstudy",
            image: "https://www.creativefabrica.com/wp-content/uploads/2019/03/Certificate-icon-by-ahlangraphic.jpg",
            period: "2022 - NA"
        }
    ]


    return (
        <div className="School">
            <h1> -&gt; Education & Certifications</h1>
            <div className="School-top">

                {/* imprimir los elementos del arreglo de objetos con la estructura de abajo */}
                <div className="School-top-left">
                    {school.map(function (school_item, i) {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: (i+1) * 0.7 }} 
                                viewport={{ once: true }}
                                delay={`${i + 1}000ms`}
                            >
                                <Card
                                    sx={{
                                        marginTop: "30px",
                                        maxWidth: 270,
                                        maxHeight: 945,
                                        backgroundColor: "white",
                                        color: "black",
                                        boxShadow: "6px 13px 23px -5px rgb(0 0 0 / 46%)",
                                        borderRadius: "10px",
                                        border: "none",
                                        marginLeft: "30px",
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
                                            <Typography gutterBottom variant="h6" fontSize={"15px"} fontFamily={"'Roboto Mono', monospace"} fontWeight={"300"} component="div">
                                                {school_item.mayor}
                                            </Typography>
                                            <Typography fontSize={"15px"} fontFamily={"'Roboto Mono', monospace"} fontWeight={"400"} color="text.secondary">
                                                {school_item.years}
                                            </Typography>
                                            <Typography variant="body2" color="#0A1047" paddingTop={"10px"}>
                                                <b>{school_item.institution}</b>
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
                    {certifications.map(function (certification_item) {
                        return (
                            <Card sx={{
                                display: 'flex',
                                maxWidth: 700,
                                maxHeight: 100,
                                marginTop: "35px",
                                marginLeft: "30px",
                                boxSizing: "border-box",
                                boxShadow: "6px 13px 23px -5px rgb(0 0 0 / 46%)",
                                        borderRadius: "10px",
                                        border: "none",
                            }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 110 }}
                                    image={certification_item.image}
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {certification_item.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {certification_item.period}
                                        </Typography>
                                    </CardContent>

                                </Box>

                            </Card>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default School;