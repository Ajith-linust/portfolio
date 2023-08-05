import { convertStringToArray } from "@/app/utils";
import useReveal from "hooks/useReveal";
import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

export function TitleHeader({ headerText }: { headerText: string }) {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useReveal(
    headerRef,
    (isInteract: boolean, elem) => {
      if (isInteract) elem.classList.add("reveal");
    },
    true
  );

  useEffect(() => {
    let text = convertStringToArray(headerText);

    if (headerRef.current?.children.length) return;

    text.forEach((d) => {
      let span = document.createElement("span");
      span.innerText = d;
      headerRef.current?.appendChild(span);
    });
  }, []);

  return <Header ref={headerRef} textLength={headerText.length}></Header>;
}

function createCSS(length: number) {
    let styles = "";
  
    for (let i = 1; i <= length; i += 1) {
      styles += `
           span:nth-child(${i}) {
             animation-delay: ${i / length}s !important;
           }
         `;
    }
  
    return css`
      ${styles}
    `;
  }
  
  export const Header = styled.h1<{ textLength: number }>`
    margin-bottom: 150px;
    font-size: 2em;
    text-align: center;
    color: var(--blue);
    grid-column: 1 / 3;
    text-shadow: 1px 7px 16px rgb(46 83 219 / 13%);
    display: flex;
    justify-content: center;
  
    ${(p) => createCSS(p.textLength)};
  
    &.reveal span {
      animation: reveal-header .4s ease forwards;
    }
  
    span {
      min-width: 9px;
      display: block;
      opacity: 0;
    }
  
    @keyframes reveal-header {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  
    @media (max-width: 800px) {
      grid-column: 1 / 2;
    }
  `;
  