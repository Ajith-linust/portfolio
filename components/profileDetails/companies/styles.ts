"use client";

import { styled } from "styled-components";

export const CompaniesWrapper = styled.div`
  padding-top: 100px;
  margin-top: 100px;

  @media (max-width: 800px) {
    margin-top: 0px;
  }
`;

export const CompaniesBlock = styled.div`
  > div {
    margin-top: 30px;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  perspective-origin: 300px;
`;

export const ProjectBlock = styled.div`
  padding: 20px;
  border-radius: 12px;
  background: var(--secondary-color);
  /* border: 1px solid #eee; */
  transform-origin: center top;
  transform-style: preserve-3d;
  transition: all 0.3s;
  position: relative;

  p {
    font-size: 14px;
    color: #f25f2c;
    font-weight: 600;
  }

  article,
  ul {
    padding: 20px 0 10px 0;
    color: var(--grey);
    font-size: 14px;
    line-height: 20px;
  }

  ul {
    padding: 0px 20px;
  }
  li {
    margin-top: 10px;
  }
  li::marker {
    color: #f25f2c;
  }

  &:hover {
    transform: translate(0px, -10px);
  }

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 12px;
    height: 12px;
    border-radius: 30px;
    border: 3px solid orange;
    transform: scale(0);
    transition: none;
  }

  &:hover::after {
    border-color: transparent;
    transform: scale(1);
    transition: all 1s ease;
  }
`;
