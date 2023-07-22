"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import UserInformation from "@/components/userInformation";
import Header from "@/components/header";
import CompanyDetails from "@/components/profileDetails";
import { GlobalStyle } from "./styles";
import * as Styles from "./styles";

const MobileNavBar = dynamic(() => import("@/library/mobileNavBar"));

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let mode = sessionStorage.getItem("theme");

    if (!mode) {
      sessionStorage.setItem("theme", theme);
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
      <Styles.PortfolioWrapper>
        <Header theme={theme} setTheme={setTheme} isMobile={isMobile} />
        <UserInformation />
        <CompanyDetails />
        {isMobile && <MobileNavBar />}
      </Styles.PortfolioWrapper>
    </ThemeProvider>
  );
}

export default Home;
