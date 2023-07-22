"use client";
import styled from "styled-components";
import { ButtonTypes, SocialButtonTypes } from "./constants";

interface IButtonStyleProps {
  styles?: string;
  radius?: string;
  height?: string;
  width?: string;
  margin?: string;
  fontSize?: string;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
  variant: ButtonTypes;
}

export const Wrapper = styled.div<IButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "36px"};
  width: ${(props) => props.width || "150px"};
  border-radius: ${(props) => props.radius || "50px"};
  ${(props) => props.margin && `margin: ${props.margin};`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`};
  font-size: ${(props) => props.fontSize || "14px"};
  position: relative;
  cursor: pointer;

  ${(p) =>
    p.variant === ButtonTypes.PRIMARY &&
    `
        background: var(--blue);
        color: white;
    `};

  ${({ disabled }) =>
    disabled &&
    `
        pointer-events: none;
        opacity: 0.5;
        background: var(--grey-shade-1) !important;
        color: white !important;
        border: none !important;
    `};

  ${(props) => props.styles};
`;

export const RippleWrapper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);

    &.animation {
      animation: ripple 0.4s ease-in;
    }

    @keyframes ripple {
      0% {
        opacity: 0;
      }
      25% {
        opacity: 1;
      }
      100% {
        width: 200%;
        padding-bottom: 200%;
        opacity: 0;
      }
    }
  }
`;
