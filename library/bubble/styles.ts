import { styled } from "styled-components";

export const BubbleWrapper = styled.div`
    position: fixed;
    width: 100px;
    height: 100px;
    background: radial-gradient(transparent, #eeeeee3d 130%);
    border-radius: 100px;
    transition: all 1.2s;
    z-index: 1100;
    pointer-events: none;
    margin: -50px 0 0px -50px;
    top: 50vh;
    left: 50vw;

    span:nth-child(1) {
        left: 0px;
        top: 50%;
    }
    span:nth-child(2) {
        left: 18%;
        top: 17%;
    }
    span:nth-child(3) {
        left: 56%;
        top: 0%;
    }
    span:nth-child(4) {
        left: 96%;
        top: 12%;
    }
    span:nth-child(5) {
        left: 119%;
        top: 50%;
    }
    span:nth-child(6) {
        left: 110%;
        top: 93%;
    }
    span:nth-child(7) {
        top: 120%;
        left: 62%;
    }
    span:nth-child(8) {
        left: 12%;
        top: 95%;
    }
`;
