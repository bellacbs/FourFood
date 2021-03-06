import styled from "styled-components";
import { primaryColor } from "../../constants/colors";
import logo from "../../assets/logoFutureEatsWhite.png"

export {logo}

export const Container = styled.div`
    position: absolute;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${primaryColor};
    background-image: url(${logo});
    background-position: center;
    background-size: 32%;
    background-repeat:no-repeat;
`