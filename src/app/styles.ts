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
      }
`};
`

export const PortfolioWrapper = styled.div`
    max-width: 1600px;
    margin: auto;
`;
