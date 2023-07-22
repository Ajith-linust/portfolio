'use client'

import styled from 'styled-components';

export const EducationWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.25fr .75fr;
    gap: 0 70px;
    align-items: center;
    padding-top: 100px;

    > img {
        margin: auto;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        justify-content: center;

        > img {
            width: 200px;
            height: 200px;
        }
        > div {
            width: max-content;
            margin: 100px auto 0;
        }
    }
`;

export const EducationBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: space-between;

    img {
        transform: translateY(4px);
    }

    p {
        font-weight: bold;
        letter-spacing: .6px;
        color: #f25f2c;
        font-size: 16px;
        text-transform: capitalize;
    }

    label {
        display: block;
        font-size: 13px;
        color: var(--text);
        margin-block: 6px 12px;
    }

    article {
        font-size: 13px;
        color: var(--grey);
    }

    article span {
        font-weight: bold;
    }
`;
