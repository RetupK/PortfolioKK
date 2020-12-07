import React from "react";
import { WorkprocessData } from "./WorkprocessData";
import { WorkProcessMainContainer, IconWrapper, SingleWorkprocessWrapper, Span, IconsAndArrowWrapper, ArrowIcon } from "./Workprocess.css";
import SectionDescription from "../../components/SectionDescription/SectionDescription";

const WorkProcess = () => {
    return (
        <>
            <SectionDescription
                title="Podstawa to dobry plan"
                subTitle="Doskonałość to ciągły proces, dlatego warto mieć swój plan."
            />
            <WorkProcessMainContainer>
                {WorkprocessData.map((item) =>
                    <SingleWorkprocessWrapper>
                        <IconsAndArrowWrapper>
                            <IconWrapper bg={item.isBackground}>{item.icon}</IconWrapper>
                            <ArrowIcon />
                        </IconsAndArrowWrapper>
                        <Span>{item.name}</Span>
                    </SingleWorkprocessWrapper>
                )}
            </WorkProcessMainContainer>
        </>
    )
}

export default WorkProcess;