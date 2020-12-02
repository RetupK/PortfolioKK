import styled from "styled-components";
import img from "../../assests/images/bgHome.jpg";
import { Title } from "../../components/SectionDescription/SectionDescription.css";

export const GreetingContainerImgBg = styled.div`
    background: linear-gradient(
        rgba(0, 0, 0, 0.7), 
        rgba(0, 0, 0, 0.7)
    ), url(${img});
    background-size: 100% 100%;
    background-attachment: fixed;
`

export const GreetingCardContainer = styled.div`
    margin: 0 auto;
    width: 55vw;
    height: 65vh;
    background: ${props => props.theme.colors.color1};
    box-shadow: ${props => props.theme.box_shadows.shadow2};
    border-radius: 4px;
    position: relative;
    top: 120px;
    flex-direction: column;
`

export const CardContentContainer = styled.div`
    display: flex;
    padding: 50px;
`

export const ImgContainer = styled.div`
    flex: 1;
`

export const SingleContentContainer = styled.div`
    flex: 2;
    padding: 0px 30px;
`


export const Footer = styled.footer`
    width: 100%;
    height:70px;
    background: ${props => props.theme.colors.color3};
    color: white;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const KeyValueContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px 0px;
`

export const SingleElementValue = styled.div`
    width: ${props => props.keyOfObj ? "30%" : "70%"};
`

export const DescText = styled(Title)`
    font-size: 13px;
    padding: 5px 0px;
    text-transform: unset;
    font-weight: ${props => props.keyOfObj ? "bold" : "unset"};
    color: ${props => props.keyOfObj ? "#343a40" : "#6c757d"};
    letter-spacing: 1px;
`