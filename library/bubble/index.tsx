import { useEffect, useRef, useState } from "react";
import * as Styles from "./styles";

function Bubble() {
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let bubble = bubbleRef.current;

    if (!bubble) return;

    const mouseMoveHandler = (e: any) => {
      if (!bubble) return;

      bubble.style.top = `${e.clientY}px`;
      bubble.style.left = `${e.clientX}px`;
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window?.removeEventListener("mousemove", mouseMoveHandler);
  }, [bubbleRef]);

  return <Styles.BubbleWrapper ref={bubbleRef}></Styles.BubbleWrapper>;
}

export default Bubble;
