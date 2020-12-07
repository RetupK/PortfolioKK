import React, {lazy, Suspense, useState} from "react";
import { NavbarContainer, PortfolioTextContainer, Ul, List, FooterContainer } from "./Navbar.css";
import portfolioText from "../../assests/images/portfolioText.png";
import { NavbarData } from "./NavbarData";
import Loading from "../Spinner/SpinnerLoading/SpinnerLoading.css";
import Hamburger from "../Hamburger/Hamburger";
const RenderPhoto = lazy(() => import("../RenderPhoto/RenderPhoto"));

const Navbar = () => {

    const [isShow, setIsShow] = useState(false);

    return (
        <NavbarContainer>
            <PortfolioTextContainer>
                <Hamburger setIsShow={setIsShow} isShow={isShow}/>
                <Suspense fallback={<Loading/>}>
                    <RenderPhoto url={portfolioText} />
                </Suspense>
            </PortfolioTextContainer>
            <Ul isShow={isShow}>
                {NavbarData.map((item) =>
                    <List isShow={isShow}>{item.name}</List>
                )}
            </Ul>
            <FooterContainer>
                Krystian Kalinowski
            </FooterContainer>
        </NavbarContainer>
    )
}

export default Navbar;