import React from 'react'
import {makeStyles, Paper, Typography} from "@material-ui/core"
import bg from "components/images/isometric-squares.svg"
import logo from "components/images/logo-white.svg"

const Banner = () => {
    const classes = useStyles()
    return (
        <>
            <Paper variant="outlined" square elevation ={0} className = {classes.banner}>
                <div>
                    <img src={logo} alt = "Logo" className={classes.logo}/>
                </div>                
                <div className={classes.titleContainer}>
                    <Typography variant="h2" className = {classes.title}>
                        Automatiza tus procesos de<br/>negocio con WorkWise
                    </Typography>
                </div>
                <div className={classes.button}>
                    <a class="btn btn-dark btn-wide transition-3d-hover mb-2 mb-sm-0 mr-3 w-lg-30" 
                        href="#contact-us" >
                        Contáctanos
                    </a>
                </div>
            </Paper>
        </>
    )
}

export default Banner

const useStyles = makeStyles((theme)=>({
    banner:{
        width: "inherit",
        height: "55vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "#fff",
        fontWeight: "bold",
        position:"relative",
        backgroundColor:"#1B4373",
        contentAlign: "center",
    },

    titleContainer:{
        position:"absolute",
        paddingLeft: theme.spacing(75),
        paddingTop: theme.spacing(5),
        justifyContent:"space-between",
        fontWeight:"bold",
        textAlign:"center",
    },

    title:{
        color: "#fff",
    },

    logo:{
        width:"10rem",
        height:"auto",
        marginLeft: theme.spacing(20),
        marginTop: theme.spacing(3)
    },

    button:{
        position:"absolute",
        paddingLeft: theme.spacing(110),
        paddingTop: theme.spacing(35),
    },

    [theme.breakpoints.down("sm")]:{
        titleContainer:{
            paddingLeft: theme.spacing(10),
            fontSize:"0.5rem",
            paddingTop: theme.spacing(10)
        },

        button:{
            paddingLeft: theme.spacing(50)
        }

    }
}))