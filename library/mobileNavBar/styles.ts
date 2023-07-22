'use client'

import { styled } from "styled-components";

export const MobileNavWrapper = styled.div`
    width: 100%;
    background: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    position: sticky;
    bottom: 0px;
    z-index: 9999;

    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    svg path {
        fill: var(--text);
    }

    svg:hover path {
        fill: var(--blue);
        transition: fill .3s;
    }
`;
