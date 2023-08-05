'use client'
import { styled } from "styled-components"

export const UserInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    height: calc(100vh - 170px);
    overflow: hidden;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        height: auto;
    }
`;

export const LeftWrapper = styled.div`
    padding: 20px 70px;
    position: relative;
    max-width: 635px;
    z-index: 1;
    width: 100%;

    p {
        color: #8e5df8;
        font-size: 14px;
        line-height: 20px;
    }

    p span {
        display: block;
    }

    h1 {
        margin: 20px 0;
    }

    article {
        color: var(--grey);
        font-size: 12px;
        line-height: 19px;
    }

    svg {
        width: 100px;
        position: absolute;
        filter: drop-shadow(0px 0px 20px var(--grey-shade-1));
        animation: rotate 100s forwards linear infinite;
        z-index: -1;
    }

    @keyframes rotate {
        0% {
            transform: translate(350px, -100px) rotate(0deg);
        } 25% {
            transform: translate(0px, -40px) rotate(90deg);
        } 50% {
            transform: translate(100px, 40px) rotate(180deg);;
        } 75% {
            transform: translate(270px, -40px) rotate(270deg);
        } 100% {
            transform: translate(350px, -100px) rotate(359deg);
        }
    }

    @media (max-width: 1200px) {
        margin: 50px auto 0;
        padding: 20px;
        order: 2;
    }
`;
export const RightWrapper = styled.div`
    order: 1;
    justify-self: center;
    position: relative;

    img {
        max-width: 500px;
        min-width: 300px;
        width: 50vw;
        transform: translateY(-100px);
    }

    p {
        font-size: 12px;
        position: absolute;
        left: 50%;
        top: 20px;
        padding: 6px 10px;
        border-radius: 8px;
        box-shadow: 0px 0px 20px -5px var(--grey-shade-1);
        color: #aeaeae;
        z-index: 10;
        background-color: white;
        overflow: hidden;
        transform: translateX(-50%);
    }

    p:after {
        content: "";
        position: absolute;
        left: -26px;
        right: auto;
        top: 19px;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #40153e;
    }

    @media (max-width: 1200px) {
        img {
            max-width: 380px;
            height: 380px;
            transform: translateY(-30px);
        }
    }
`;
