import styled from "styled-components";

export const Title = styled.h3`
    font-family: Poppins,sans-serif;
    padding: 0;
    margin: 0;
    font-size: 25px;
    font-weight: bold;
    color: #343a40;
    text-transform: uppercase;
`

export const SubTitle = styled.h3`
    font-size: 14px;
    color: #6c757d;
    text-transform: uppercase;
    font-family: Poppins,sans-serif;
    letter-spacing: 1.5px;
`

export const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 100px;
    height:80px;
    &:before{
        content: "";
        position: absolute;
        width: 50px;
        border: 3px solid;
        margin: 65px 0px 0px -25px;
        color: #F54EA2;
    }
`

export const SubSectionTitle = styled(Title)`
    font-size: 20px;
`

export const TitleContainerSubSection = styled(TitleContainer)`
    margin-bottom: 10px;
    &:before{
        border: 1px solid;
        margin: 33px 0px 0px -14px;
        width: 40px;
    }
`