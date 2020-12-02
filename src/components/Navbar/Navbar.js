import React, {lazy, Suspense} from "react";
import { NavbarContainer, PortfolioTextContainer, Ul, List, FooterContainer } from "./Navbar.css";
import portfolioText from "../../assests/images/portfolioText.png";
import { NavbarData } from "./NavbarData";
import Loading from "../Spinner/SpinnerLoading/SpinnerLoading.css";
const RenderPhoto = lazy(() => import("../RenderPhoto/RenderPhoto"));

const Navbar = () => {
    return (
        <NavbarContainer>
            <PortfolioTextContainer>
                <Suspense fallback={<Loading/>}>
                    <RenderPhoto url={portfolioText} width="220px" height="80px" />
                </Suspense>
                
            </PortfolioTextContainer>
            <Ul>
                {NavbarData.map((item) =>
                    <List>{item.name}</List>
                )}
            </Ul>
            <FooterContainer>
                Krystian Kalinowski
            </FooterContainer>
        </NavbarContainer>
    )
}

export default Navbar;