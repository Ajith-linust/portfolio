'use client'

import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: sticky;
    top: 0px;
    background: var(--background-color);
    z-index: 10000;
    padding: 24px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: 800px) {
        padding: 20px;

        > img {
            filter: drop-shadow(2px 4px 6px var(--secondary-color));
            z-index: 99999;
        }
    }
`;

export const NavWrapper = styled.div`
    font-size: 14px;
    display: flex;
    gap: 40px;

    > * {
        cursor: pointer;
    }
    > *:hover {
        opacity: .6;
    }
`;
