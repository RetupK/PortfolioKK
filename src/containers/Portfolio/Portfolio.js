import React from "react";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { portfolioDescription, projects } from "./PortfolioData";
import { SingleElContainer, PortfolioMainContainer, P, Img } from "./Portfolio.css";
import { useState } from "react";
import { useCallback } from "react";

const Portfolio = () => {

    const [mouseEnter, setMouseEnter] = useState(null);

    const handleChangeMouse = useCallback((name) => {
        setMouseEnter(name)
    }, [setMouseEnter])

    return (
        <>
            <SectionDescription
                title={portfolioDescription.title}
                subTitle={portfolioDescription.subTitle}
            />
            <PortfolioMainContainer>
                {projects.map((item) => {
                    return (
                        <SingleElContainer
                            onMouseEnter={() => handleChangeMouse(item.name)}
                            onMouseLeave={() => handleChangeMouse(null)}
                        >
                            {mouseEnter === item.name ? <div>s</div> : <>
                                <Img src={item.img} width="80%" height="60%" shadow />
                                <P>{item.name}</P>
                            </>}

                        </SingleElContainer>
                    )
                })}
            </PortfolioMainContainer>
        </>
    )
}

export default Portfolio;