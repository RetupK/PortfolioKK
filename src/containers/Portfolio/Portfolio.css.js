import styled from "styled-components";
import { Paragraph } from "../../utility/RepeatedStyle/RepeatedStyle";

export const PortfolioMainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SingleElContainer = styled.div`
    width: 45%;
    height: 500px;
    margin: 20px 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const P = styled(Paragraph)`
    margin-top: 20px;
`

export const Img = styled.img`
    width: 80%;
    height: 60%;
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 10px;
    &:hover{
        background: white;
        border: 5px solid black;
    }
`