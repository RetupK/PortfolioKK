import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutMeContainer from "../../containers/AboutMeContainer/AboutMeContainer";
import Achievments from "../../containers/Achievments/Achievments";
import GreetingContainer from "../../containers/GreetingContainer/GreetingContainer";
import Portfolio from "../../containers/Portfolio/Portfolio";
import Skills from "../../containers/Skills/Skills";
import WorkProcess from "../../containers/WorkProcess/Workprocess";
import { HomeMainContainer, ContentContainer } from "./Home.css";

const Home = () => {

    return (
        <HomeMainContainer>
            {/* <Spinner/> */}
            <Navbar />
            <ContentContainer>
                <GreetingContainer/>
                <AboutMeContainer/>
                <WorkProcess/>
                <Skills/>
                <Achievments/>
                <Portfolio/>
            </ContentContainer>
        </HomeMainContainer>
    )
}

export default Home;