import React, { lazy, Suspense } from "react";
import { GreetingContainerImgBg, GreetingCardContainer, DescText, CardContentContainer, SingleElementValue, ImgContainer, KeyValueContainer, SingleContentContainer, Footer } from "./GreetingContainer.css";
import myPhoto from "../../assests/images/myphoto.jpg";
import { GreetingContainterData, GreetingTitle, parallaxData } from "./GreetingContainerData";
import { Parallax } from "../../utility/RepeatedStyle/RepeatedStyle";
import Button from 'react-bootstrap/Button'
import Loading from "../../components/Spinner/SpinnerLoading/SpinnerLoading.css";
import { SubTitle, Title } from "../../components/SectionDescription/SectionDescription.css";
const RenderPhoto = lazy(() => import("../../components/RenderPhoto/RenderPhoto"));
const SocialIcons = lazy(() => import("../../components/SocialIcons/SocialIcons"));

const GreetingContainer = () => {
    return (
        <GreetingContainerImgBg>
            <Parallax parallaxData={parallaxData}>
                <GreetingCardContainer>
                    <CardContentContainer>
                        <ImgContainer>
                            <Suspense fallback={<Loading/>}>
                                <RenderPhoto url={myPhoto} width="440px" height="466px" shadow />
                            </Suspense>
                        </ImgContainer>
                        <SingleContentContainer>
                            <Title>{GreetingTitle.title}</Title>
                            <SubTitle>{GreetingTitle.subTitle}</SubTitle>
                            <KeyValueContainer>
                                {GreetingContainterData.map((item) =>
                                    <SingleElementValue key={item.id} keyOfObj={item.keyOfObj}>
                                        <DescText keyOfObj={item.keyOfObj}>{item.name}</DescText>
                                    </SingleElementValue>
                                )}
                            </KeyValueContainer>
                            <Button variant="danger">Osiągnięcia</Button>
                        </SingleContentContainer>
                    </CardContentContainer>
                    <Footer>
                        <Suspense fallback={<Loading/>}>
                            <SocialIcons />
                        </Suspense>
                    </Footer>
                </GreetingCardContainer>
            </Parallax>
        </GreetingContainerImgBg>
    )
}

export default GreetingContainer;