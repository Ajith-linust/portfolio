"use client";

import { styled } from "styled-components";

export const SkillsWrapper = styled.div`
  padding-top: 180px;

  p, span {
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
