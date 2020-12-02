import React, { useEffect, useState } from "react";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { parallaxData, progressbarData, SkillsData } from "./SkillsData";
import { SkillsMainContainer, ParallaxBox, PersonalSkillsSection } from "./Skills.css";
import CircleComp from "../../components/AllAboutCircleAndProgress/CircleComp/CircleComp";
import { stylesForCircle } from "../../components/AllAboutCircleAndProgress/CircleComp/CircleComp.css";
import Progressbar from "../../components/AllAboutCircleAndProgress/Progressbar/Progressbar";
import Zoom from 'react-reveal/Zoom';

const Skills = () => {
    const [animationStart, setAnimation] = useState(false);

    const func = () => {
        if (window.scrollY > 1320) {
            setAnimation(true);
        } else {
            setAnimation(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", func);
        return () => window.removeEventListener("scroll", func)
    }, [setAnimation])

    return (
        <ParallaxBox parallaxData={parallaxData} style={{ padding: "50px 0px 0px 0px" }}>
            <SectionDescription
                title="Umiejętności"
                subTitle="Nie tylko teoria jest kluczem, kluczem jest umiejętność wdrażania teorii do czynów"
            />
            <SkillsMainContainer>
                {SkillsData.map((item) =>
                    <CircleComp
                        styles={stylesForCircle}
                        value={item.percentage}
                        animationStart={animationStart}
                        setAnimation={setAnimation}
                        label={item.name}
                    />
                )}
            </SkillsMainContainer>
            <SkillsMainContainer>
                <PersonalSkillsSection>
                    <SectionDescription subSection title="Umiejętności miękkie" />
                    {progressbarData.map((item) =>
                        <Zoom left={item.left} right={item.right}>
                            <Progressbar value={item.value} label={item.label} />
                        </Zoom>
                    )}
                </PersonalSkillsSection>
            </SkillsMainContainer>
        </ParallaxBox>

    )
}

export default Skills;