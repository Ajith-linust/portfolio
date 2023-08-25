'use client'

import styled from 'styled-components';

export const EducationWrapper = styled.div`
    padding-top: 300px;
    min-height: 700px;
`;

export const EducationBlock = styled.div`
    display: grid;
    gap: 40px;
    max-width: 1200px;
    /* opacity: 0; */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    &.reveal > div {
        animation: reveal 1s ease forwards;
    }

    &.reveal > div:nth-child(2) {
        animation-delay: 0.3s;
    }
    &.reveal > div:nth-child(3) {
        animation-delay: 0.6s;
    }

    > div {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        position: relative;
        padding-top: 16%;
        color: var(--grey);
        justify-self: center;
        border: 5px solid var(--cardBorder);
        background: var(--cardBg);
        box-shadow: -12px -12px 36px var(--shadow1), 12px 12px 36px var(--shadow2);
        opacity: 0;
    }

    img {
        margin-top: 3px;
        position: absolute;
        bottom: 40px;
    }

    p {
        font-weight: bold;
        letter-spacing: .6px;
        font-size: 16px;
        text-transform: capitalize;
    }

    label {
        display: block;
        font-size: 13px;
        margin-block: 6px 6px;
    }

    article {
        font-size: 13px;
    }

    article span {
        color: var(--text);
    }

    @keyframes reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
