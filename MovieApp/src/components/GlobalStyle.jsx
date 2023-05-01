import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        font-family: ${(props) => props.theme.font};
        margin: 0;
        padding: 0;
        background: ${(props) => props.theme.colorpalette["secondary-dark"]}
    }
`;
