'use client'
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
    mode: string;
}>`
${(p) => p.mode === 'dark' && `
      :root {
        --text: white;
        --background-color: black;
        --secondary-color: #0f0f0f;
        --grey-shade-2: #484c52;
        --grey-shade-1: #2c2c2c;
        --shadow1: #0b0b0b;
        --shadow2: #080808;
        --cardBg: #090909;
        --cardBorder: #000;
      }
`};
${(p) => p.mode === 'light' && `
      :root {
        --text: black;
        --background-color: white;
        --blue: #283BDA;
        --secondary-color: #f7faff;
        --grey: grey;
        --grey-shade-1: lightgrey;
        --grey-shade-2: #484c52;
        --shadow1: #f3f3f3;
        --shadow2: #ededed;
        --cardBg: #fff;
        --cardBorder: #fff;
      }
`};
`

export const PortfolioWrapper = styled.div`
    max-width: 1600px;
    margin: auto;
    z-index: 1;
`;
