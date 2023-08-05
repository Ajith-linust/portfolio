"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import UserInformation from "@/components/userInformation";
import Header from "@/components/header";
import CompanyDetails from "@/components/profileDetails";
import Bubble from "@/library/bubble";
import { GlobalStyle } from "./styles";
import * as Styles from "./styles";

const MobileNavBar = dynamic(() => import("@/library/mobileNavBar"));

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("dark");

  const portfolioWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let portfolio = portfolioWrapperRef.current;

    if(theme === 'dark') {
      let spans = document.getElementsByClassName("bubble-design");

      let i = 0;
      while(spans.length > 0) {
        delete spans[i];
        i++;
      }
      
      return;
    };

    let colors = ['rgb(36 84 255 / 15%)', 'rgb(251 206 177 / 15%)', 'rgb(237 145 33 / 15%)', 'rgb(0 255 0 / 15%)'];

    for(let i = 1; i <= 10; i++) {
      let span = document.createElement('span');
      span.className = 'bubble-design';

      span.style.background = colors[Math.floor(Math.random() * 5)];

      span.style.top = `${(Math.random() * document.body.scrollHeight) + 100}px`;
      
      if(i % 2 === 0) {
        span.style.left = `${Math.random() * 200}px`;
      } else {
        span.style.right = `${Math.random() * 200}px`;
      }

      portfolio?.before(span);
    }
  }, [theme]);

  useEffect(() => {
    let mode = localStorage.getItem("theme");

    if (!mode) {
      localStorage.setItem("theme", theme);
      return;
    }

    if (
      window.matchMedia(`(prefers-color-scheme: dark)`).matches ||
      mode === "dark"
    ) {
      setTheme("dark");
    } else if (mode === "light") {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyle mode={theme || "light"} />
      <Styles.PortfolioWrapper ref={portfolioWrapperRef}>
        <Bubble />
        <Header theme={theme} setTheme={setTheme} isMobile={isMobile} />
        <UserInformation />
        <CompanyDetails />
        {isMobile && <MobileNavBar />}
      </Styles.PortfolioWrapper>
    </ThemeProvider>
  );
}

export default Home;
