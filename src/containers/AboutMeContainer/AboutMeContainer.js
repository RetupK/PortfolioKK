import React, { lazy, Suspense } from "react";
import { Parallax } from "../../utility/RepeatedStyle/RepeatedStyle";
import { AboutMeMainContainer, DescriptionContainer, TextContainer } from "./AboutMeContainer.css";
import { AboutMeContainerData, parallaxData } from "./AboutMeContainerData";
import Loading from "../../components/Spinner/SpinnerLoading/SpinnerLoading.css";
const SectionDescription = lazy(() => import("../../components/SectionDescription/SectionDescription"));

const AboutMeContainer = () => {
    return (
        <Parallax parallaxData={parallaxData}>
            <AboutMeMainContainer>
                <Suspense fallback={<Loading />}>
                    <SectionDescription
                        title={AboutMeContainerData.title}
                        subTitle={AboutMeContainerData.subTitle}
                    />
                </Suspense>
                <DescriptionContainer>
                    <TextContainer>{AboutMeContainerData.textDesc1}</TextContainer>
                    <TextContainer>{AboutMeContainerData.textDesc2}</TextContainer>
                </DescriptionContainer>
            </AboutMeMainContainer>
        </Parallax>
    )
}

export default AboutMeContainer;