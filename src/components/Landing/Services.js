/* eslint-disable no-template-curly-in-string */
import React from 'react'
import {makeStyles,Paper, Typography} from "@material-ui/core"
import ico from "components/images/icon-45.svg"
import ico2 from "components/images/icon-24.svg"
import ico3 from "components/images/icon-44.svg"
import img1 from "components/images/img1.png"
import img2 from "components/images/img2.png"
import img3 from "components/images/img3.png"

const Services = () => {
    
    const classes = useStyles()

    return (
        <Paper variant = "outlined" square elevation={0} className={classes.services}>
            <div className={classes.containerTitle}>
                <Typography className={classes.title} variant = "subtitle2">
                    SERVICIOS
                </Typography>
                <Typography className={classes.sub} variant = "h4">
                    Contamos con diferentes servicios para<br/>apoyar a tu empresa
                </Typography>
            </div>
            <div className = {classes.containerAll}>
                <div className = {classes.containerImg}>
                    <p>
                        <img alt = "Img"
                            className = {classes.img1} src={img1}/>
                    </p>
                </div>
                <div className = {classes.containerOptions}>
                    <div className = {classes.opc1}>
                        <img src = {ico} className = {classes.ico} alt = "Icono 1"></img>
                        <div>
                            <aside className={classes.text}>
                                <h4 className={classes.t1}>Automatización de Procesos</h4>
                                <h5>Desarrollo de soluciones tecnológicas a la medida para automatizar todo tipo de
                                    procesos empresariales.
                                </h5>
                            </aside>
                        </div>
                    </div>

                    <div className = {classes.opc2}>
                        <img src = {ico2} className = {classes.ico} alt = "Icono 2"></img>
                        <div>
                            <aside className={classes.text}>
                                <h4 className={classes.t2}>Consultoría</h4>
                                <h5>Apoyamos a empresas con la identificación y diseño de nuevos procesos con el objetivo
                                    de facilitar su digitalización.
                                </h5>
                            </aside>
                        </div>
                    </div>

                    <div className = {classes.opc3}>
                        <img src = {ico3} className = {classes.ico} alt = "Icono 3"></img>
                        <div>
                            <aside className={classes.text}>
                                <h4 className={classes.t3}>Implementación de soluciones</h4>
                                <h5>Nuestro equipo apoya a organizaciónes con la evaluación, selección y puesta en 
                                    marcha de soluciones existentes en el mercado.
                                </h5>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

        </Paper>
    );
}

export default Services

const useStyles = makeStyles((theme)=>({
    services:{
        width:"inherit",
        height:"90vh",
        contentAlign: "center",
        color: "#fff",
        backgroundColor:"#f8f8f8"
    },

    ic1:{
        maxWidth:"10%",
        height: "auto"
    },

    ic2:{
        maxWidth:"10%",
        height: "auto"
    },

    ic3:{
        maxWidth:"10%",
        height: "auto",
    },

    title:{
        textAlign: "center",
        color: "#BBCBDE",
        paddingTop: theme.spacing(5)
    },

    sub:{
        paddingTop: theme.spacing(1),
        textAlign: "center"
    },

    containerAll:{
        backgroundColor:"#f8f8f8",
        display:"table",
        width:"100%",
        height:"80vh",
    },

    containerImg:{
        width:"50%",
        height:"74vh",
        paddingTop: theme.spacing(2),
        float: "left",
        paddingLeft: theme.spacing(10)
    },

    containerOptions:{
        width:"30%",
        display:"table",
        float: "left",
        paddingTop: theme.spacing(10)
    },

    ico:{
        float: "left",
        paddingTop:theme.spacing(2),
        width:"8%"
    },

    img1:{
        paddingLeft:theme.spacing(25),
        width:"90%",
        height:"auto",
    },

    text:{
        paddingLeft:theme.spacing(10),
        paddingTop:theme.spacing(1),
        alignContent:"center",
        textAlign:"left",
    },

    t1:{
        textWeight:"bold"
    },

    opc2:{
        paddingTop: theme.spacing(7),
    },

    opc3:{
        paddingTop: theme.spacing(7),
    },

    [theme.breakpoints.down("sm")]:{
        services:{
            justifyContent:"center"
        },

        containerImg:{
            width:"50%",
        },

        img1:{
            float:"left",
            paddingLeft: theme.spacing(1),
            paddingTop: theme.spacing(18) 
        },

        ico:{
            width:"15%"
        }
    }

}))