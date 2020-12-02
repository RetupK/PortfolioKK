import React from "react";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { portfolioDescription } from "./PortfolioData";

const Portfolio = () => {
    return (
        <div>
            <SectionDescription
                title={portfolioDescription.title}
                subTitle={portfolioDescription.subTitle}
            />
        </div>
    )
}

export default Portfolio;