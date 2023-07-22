'use client'

import { styled } from "styled-components";

export const CompanyDetailsWrapper = styled.div`
    padding: 0 70px;

    @media (max-width: 800px) {
        padding: 20px;
    }
`;

export const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    margin-bottom: 80px;
    font-size: 2em;
    text-align: center;
    color: var(--blue);
    grid-column: 1 / 3;
    text-shadow: 1px 7px 16px rgb(46 83 219 / 13%);

    @media (max-width: 800px) {
        grid-column: 1 / 2;
    }
`;
