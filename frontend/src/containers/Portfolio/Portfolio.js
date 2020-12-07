import React from "react";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { portfolioDescription, projects } from "./PortfolioData";
import { SingleElContainer, PortfolioMainContainer, P, Img, ImageContainer, ElementsOnHoverContainer, SingleLink, LinkIcon, GithubIcon } from "./Portfolio.css";
import { useState } from "react";
import { useCallback } from "react";

const Portfolio = () => {

    const [mouseEnter, setMouseEnter] = useState(null);

    const handleChangeMouse = useCallback((id) => {
        setMouseEnter(id)
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
                        <SingleElContainer key={item.id}>
                            <ImageContainer
                                onMouseEnter={() => handleChangeMouse(item.id)}
                                onMouseLeave={() => handleChangeMouse(null)}
                            >
                                {mouseEnter === item.id ?
                                    <ElementsOnHoverContainer>
                                        <SingleLink href={item.path} target="_blank" rel="noreferrer" rel="noopener" ><LinkIcon /></SingleLink>
                                        <SingleLink href={item.pathGithub} target="_blank" rel="noreferrer" rel="noopener" ><GithubIcon /></SingleLink>
                                    </ElementsOnHoverContainer> :
                                    <Img
                                        src={item.img}
                                        width="80%"
                                        height="60%"
                                        shadow
                                    />
                                }
                            </ImageContainer>
                            <P>{item.name}</P>
                        </SingleElContainer>
                    )
                })}
            </PortfolioMainContainer>
        </>
    )
}

export default Portfolio;