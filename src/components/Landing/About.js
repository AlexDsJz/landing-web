import React from 'react'
import {makeStyles, Typography} from "@material-ui/core"
import imgA from "components/images/aboutus.png"

function About() {
    const classes = useStyles()
    return (
        <>
        <div className={classes.contTitle}>
            <Typography className={classes.title} variant="h4">
                Nosotros
            </Typography>
        </div>
        <div className={classes.container}>
            <Typography className={classes.content} variant="h6"><br/>
                Somos una consultoría de software especializada en la automatización digital de procesos.<br/><br/>
                A través de la experiencia de distintas industrias hemos generado una metodología para explotar áreas de oportunidad que permitan incrementar la productividad, calidad y rentabilidad de nuestros clientes.
            </Typography>
            <img src={imgA} alt = "Nosotros" className={classes.imgA}/>
        </div>
        </>
    )
}

export default About;

const useStyles = makeStyles((theme)=>({
    container:{
        width:"inherit",
        height:"85vh",
        paddingLeft:theme.spacing(20),
        paddingRight:theme.spacing(20),
        paddingTop:theme.spacing(5),
    },

    title: {
        paddingLeft:theme.spacing(25),
        paddingTop:theme.spacing(3)
    },

    content: {
        paddingLeft:theme.spacing(20),
        paddingRight:theme.spacing(20),
    },

    imgA:{
        paddingLeft:theme.spacing(60),
        paddingRight:theme.spacing(60),
        paddingTop:theme.spacing(1),
    },

    [theme.breakpoints.down("sm")]:{
        container:{
            textSize: theme.spacing(2),
            paddingLeft:theme.spacing(0),
            display:"flex",
            height:"55vh"
        },

        title:{
            paddingLeft: theme.spacing(4),
            paddingTop: theme.spacing(5)
        },

        content: {
            paddingLeft: theme.spacing(7)
        },

        imgA:{
            width:"20rem",
            height:"14rem",
            padding:theme.spacing(0),
            justifyContent:"space-between"
        }
    }
}))