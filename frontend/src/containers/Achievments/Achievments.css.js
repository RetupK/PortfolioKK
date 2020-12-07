import styled from "styled-components";

export const SingleElementContainer = styled.div`
    height: 100%;
    background: white;
    color: black;
    text-align: left;
    display: flex;
    width: 100%;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const SubSectionContainer = styled.div`
    width:50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 767px) {
        width: 100%;
    }
`

export const TextContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    letter-spacing: 0.5px;
    @media (max-width: 767px) {
        width: 95%;
        margin-top: 50px;
    }
`

export const ImgDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
        width: 95%;
        margin: 20px auto 60px auto;
    }
`

export const DivTest = styled.div`
    width: 30%;
`

export const Text = styled.p`
    font-size: 15px;
    margin: 0;
    padding: 0;
    font-family: Poppins,sans-serif;
    color: gray;

`