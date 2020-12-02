import styled from "styled-components";
import { Parallax } from "../../utility/RepeatedStyle/RepeatedStyle";

export const SkillsMainContainer = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 auto;
`

export const ParallaxBox = styled(Parallax)`
    border-top: 4px solid ${props => props.theme.colors.color4};
    min-height:100vh;
`

export const SingleSection = styled.div`
    width: 30%;
    padding: 20px 40px;
`

export const PersonalSkillsSection = styled.div`
    width: 50%;
    padding: 20px 40px;
`
