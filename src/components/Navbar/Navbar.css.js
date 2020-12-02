import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    width: 300px;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    background: ${props => props.theme.colors.color1};
    box-shadow: ${props => props.theme.box_shadows.shadow1};
    z-index: 10;
    justify-content: space-between;
    padding-top: 50px;
`

export const PortfolioTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    &:after{
        content: "";
        width:7px;
        height:7px;
        border-radius:50%;
        background: ${props => props.theme.colors.color2};
        margin: 33px 0px 23px -8px;
    }
`

export const Ul = styled.ul`
    text-decoration: none;
    list-style-type: none;
`

export const List = styled.li`
    padding: 5px 0px;
    font-weight: bold;
    letter-spacing: 1px;
`

export const FooterContainer = styled.footer`
    width: 100%;
    margin: 60px 0px;
    text-align: center;
    font-family: 'Cedarville Cursive', cursive;
    font-size: 25px;
`