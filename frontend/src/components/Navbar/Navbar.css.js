import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    width: 300px;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    background: ${props => props.theme.colors.color1};
    box-shadow: ${props => props.theme.box_shadows.shadow1};
    z-index: 100;
    justify-content: space-between;
    padding-top: 50px;
    @media (max-width: 768px) {
        width: 100%;
        padding: unset;
        justify-content: unset;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 60px;
    }
`

export const PortfolioTextContainer = styled.div`
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    &:after{
        content: "";
        width:7px;
        height:7px;
        border-radius:50%;
        background: ${props => props.theme.colors.color2};
        margin: 33px 0px 23px -8px;
        @media (max-width: 768px) {
            margin: 33px 0px 40px -2px;
        }
    }
    @media (max-width: 768px) {
        width: 60%;
        display: flex;
        align-items: center;
        height: 56px;
    }
`

export const Ul = styled.ul`
    text-decoration: none;
    list-style-type: none;
    @media (max-width: 768px) {
        padding: ${props => props.isShow ? "20px 0px 0px 0px" : "0px"};
        width: 100%;
        background: white;
        box-shadow: ${props => props.theme.box_shadows.shadow3};
    }
`

export const List = styled.li`
    padding: 5px 0px;
    font-weight: bold;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        border-bottom: 1px solid ${props => props.theme.colors.color4};
        margin-right: 10px;
        padding-left: 10px;
        display: ${props => props.isShow ? "flex" : "none"}
    }
`

export const FooterContainer = styled.footer`
    width: 100%;
    margin: 60px 0px;
    text-align: center;
    font-family: 'Cedarville Cursive', cursive;
    font-size: 25px;
    @media (max-width: 768px) {
        display: none;
    }
`