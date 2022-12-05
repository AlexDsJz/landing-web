import React from 'react'
import {makeStyles, Typography, Paper} from "@material-ui/core"
import bg from "components/images/half-circle-3.svg"
import i1 from "components/images/icon-2.svg"
import i2 from "components/images/icon-61.svg"
import i3 from "components/images/icon-5.svg"

const Benefits = () => {
    const classes = useStyles()
    return (
    <>
        <Paper variant = "outlined" square elevation={5} className={classes.benefits}>
            <div className={classes.containerTitle}>
                <Typography className={classes.title} variant = "subtitle2">
                    BENEFICIOS
                </Typography>
                <Typography className={classes.sub} variant = "h4">
                    Transforma tu negocio a la era digital
                </Typography>
            </div>
            <div className={classes.containerAll}>
                <div className={classes.container1}>
                    <img src = {i1} alt = "Icono" className={classes.icon1}/>
                    <h3 className={classes.sub1}>
                        Ofrece un mejor servicio a tus clientes
                    </h3>
                    <h5 className={classes.t1}>
                        Ejecuta tareas que podrían tomar días en unos cuantos segundos.
                    </h5>
                </div>
                <div className = {classes.container2}>
                    <img src = {i2} alt = "Icono" className={classes.icon2}/>
                    <h3 className={classes.sub2}>
                        Reduce el riesgo de errores humanos
                    </h3>
                    <h5 className={classes.t2}>
                        Disminuye errores manuales incrementando la confiabilidad de tus procesos.
                    </h5>
                </div>
                <div className = {classes.container3}>
                    <img src = {i3} alt = "Icono" className={classes.icon3}/>
                    <h3 className={classes.sub3}>
                        Aumenta la productividad de procesos clave
                    </h3>
                    <h5 className={classes.t3}>
                        Elimina cuellos de botella generados por procesos lentos y tediosos.
                    </h5>
                </div>
            </div>
        </Paper>
    </>
  )
}

export default Benefits;

const useStyles = makeStyles((theme)=>({
    benefits:{
        width:"inherit",
        height:"65vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        position:"relative",
        backgroundColor:"#1A5090",
        contentAlign: "center",
        backgroundPosition: "right",
        color: "#fff",
    },

    title:{
        textAlign: "center",
        color: "#BBCBDE",
        paddingTop: theme.spacing(5)
    },

    sub:{
        color:"#fff",
        textAlign: "center"
    },

    containerAll:{
        display:"flex",
        justifyContent:"center",
        paddingTop: theme.spacing(8),
    },

    container1:{
        backgroundColor: "#fff",
        paddingTop: theme.spacing(2),
        width: "40vh",
        height:"30vh",
        borderRadius: "5px",
        marginRight: "2vh"
    },

    container2:{
        backgroundColor: "#fff",
        paddingTop: theme.spacing(2),
        width: "40vh",
        height:"30vh",
        borderRadius: "5px",
        marginRight: "2vh"
    },

    container3:{
        backgroundColor: "#fff",
        width: "40vh",
        height:"30vh",
        borderRadius: "5px",
    },

    icon1:{
        marginLeft: theme.spacing(18),
        marginTop: theme.spacing(1),
        width:"25%"
    },

    icon2:{
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(19),
        width:"25%"
    },

    icon3: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(18),
        width: "25%",
    },

    sub1:{
        paddingTop: theme.spacing(3),
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(3)
    },

    sub2:{
        paddingTop: theme.spacing(3),
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(3)
    },

    sub3:{
        paddingTop: theme.spacing(2),
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(3)
    },

    t1:{
        color:"#677788",
        textAlign: "center",
        marginLeft: theme.spacing(1),
    },

    t2:{
        color:"#677788",
        textAlign: "center",
        marginLeft: theme.spacing(1),
    },

    t3:{
        color:"#677788",
        textAlign: "center",
        marginLeft: theme.spacing(1),
    },

    [theme.breakpoints.down("sm")]:{
        container1:{
            width:"30%"
        },
        
        container2:{
            width:"30%"
        },

        container3:{
            width:"30%"
        },

        icon1:{
            width:"20%",
            height:"auto",
            marginLeft: theme.spacing(15),
        },

        icon2:{
            width:"20%",
            height:"auto",
            marginLeft: theme.spacing(15),
        },

        icon3:{
            paddingTop: theme.spacing(1),
            width:"22%",
            height:"auto",
            marginLeft: theme.spacing(15),
        }
    }
}))