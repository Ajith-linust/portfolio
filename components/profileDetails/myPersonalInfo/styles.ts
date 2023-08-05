"use client";

import { styled } from "styled-components";

export const MyPersonalInfoWrapper = styled.div`
  padding-block: 200px 80px;

  &.reveal-info > * {
    animation: reveal-info 1s ease forwards;
    opacity: 0;
  }

  > h1 {
    margin-bottom: 40px;
  }

  > div:first-of-type {
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    width: max-content;
  }

  @keyframes reveal-info {
    0% {
      opacity: 0;
    } 100% {
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    padding-top: 100px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text);
`;

export const CreditWrapper = styled.div`
    margin-top: 40px;
    text-align: center;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--grey);

    img {
      transform: translate(4px, 4px);
    }
`;
