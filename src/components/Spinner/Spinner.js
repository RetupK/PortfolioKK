import { faBriefcase, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { LogoWrapper, Screen, NofreezeSpinner, SpinnerDiv, SpinnerDivContainer, Svg } from "./Spinner.css";

const AnimatedSplash = () => {
    return (
        <LogoWrapper>
            <Screen>
                <NofreezeSpinner>
                    <SpinnerDivContainer>
                        <Svg icon={faHome} />
                        <Svg icon={faUsers} />
                        <Svg icon={faBriefcase} />
                        <SpinnerDiv />
                    </SpinnerDivContainer>
                </NofreezeSpinner>
            </Screen>
        </LogoWrapper>
    );
}

const Spinner = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => setRedirect((boolean) => !boolean), 3000);
    }, [])

    return redirect ? null : <AnimatedSplash />;
}

export default Spinner;