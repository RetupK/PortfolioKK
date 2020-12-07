import styled from "styled-components";
import { Parallax } from "../../utility/RepeatedStyle/RepeatedStyle";

export const ContactMainContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 20px 0px;
    @media (max-width: 767px) {
        width: 100%;
    }
`

export const FormWrapper = styled.div`
    padding: 50px;
    box-shadow: ${props => props.theme.box_shadows.shadow1};
`

export const Plx = styled(Parallax)`
    border: 5px solid white;
    border-radius: 10px
`