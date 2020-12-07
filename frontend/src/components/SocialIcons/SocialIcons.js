import React from "react";
import { SocialContainer, SocialIconsContainer, SingleIconLinkedInWrapper } from "./SocialIcons.css";
import { socialIconsData } from "./SocialIconsData";

const SocialIcons = ({  }) => { //more icons stayed in css.
    return (
        <SocialContainer>
            <SocialIconsContainer>
                {socialIconsData.map((item) =>
                    <SingleIconLinkedInWrapper>
                        <a href={item.path} target="_blank" rel="noopener noreferrer">{item.icon}</a>
                    </SingleIconLinkedInWrapper>
                )}
            </SocialIconsContainer>
        </SocialContainer>
    )
}

export default SocialIcons;