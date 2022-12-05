import React from "react";
import Banner from "components/Landing/Banner"
import About from "components/Landing/About"
import Service from "components/Landing/Services"
import Comm from "components/Landing/Comm"
import Layout from "components/Landing/Layout"
import Benefits from "components/Landing/Benefits"

function Landing() {
    return(
            <Layout>
                <Banner/>
                <About/>
                <Benefits/>
                <Service/>
                <Comm/>
            </Layout>
    )
}

Landing.propTypes = {};

export default Landing;