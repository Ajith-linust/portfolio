import { convertStringToArray } from "@/app/utils";
import useReveal from "hooks/useReveal";
import { useEffect, useRef } from "react";
import styled from "styled-components";

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

  export const Header = styled.h1<{ textLength: number }>`
    margin-bottom: 150px;
    font-size: 2em;
    text-align: center;
    color: var(--blue);
    grid-column: 1 / 3;
    text-shadow: 1px 7px 16px rgb(46 83 219 / 13%);
    display: flex;
    justify-content: center;
  
    span {
      min-width: 9px;
      display: block;
    }

    @media (max-width: 800px) {
      grid-column: 1 / 2;
    }
  `;
  