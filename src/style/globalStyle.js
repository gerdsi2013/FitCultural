import { createGlobalStyle } from "styled-components";
import Imagem from "../../src/assets/background.jpg";
import { theme } from "./theme";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color:${theme.colors.bgColor};
    /* display: flex; */
    /* flex-direction: column; */
    width: 100%;
    height: 100vh;
    background-image:url(${Imagem});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: 'Times New Roman', Times, serif;
}

`;
