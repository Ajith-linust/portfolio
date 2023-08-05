"use client";

import { css, styled } from "styled-components";

function createCSS(length: number) {
  let styles = "";

  for (let i = 1; i <= length; i += 1) {
    styles += `
        .skills-block > div:nth-child(${i}) {
           animation-delay: ${i / length}s !important;
         }
       `;
  }

  return css`
    ${styles}
  `;
}

export const SkillsWrapper = styled.div`
  padding-top: 280px;

  p, 
  label span {
    font-size: 14px;
    color: #8e5df8;
    text-align: center;
  }

  > div {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 40px;
  }

  > div > div {
    opacity: 0;
    justify-self: center;
  }

  .skills-block > div {
    animation: reveal-skills 1s ease forwards;
  }

  ${createCSS(8)};

  @keyframes reveal-skills {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    padding-top: 80px;
  }
`;

export const LanguageWrapper = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  gap: 14px 30px;

  img {
    filter: drop-shadow(0px 8px 25px var(--grey-shade-1));
    border-radius: 8px;
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
    color: var(--grey);
  }

  > div > span span {
    font-weight: bold;
  }
`;
