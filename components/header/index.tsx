"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import * as Styles from "./styles";

function Header({ isMobile }: { isMobile: boolean }) {
  const { theme, setTheme } = useTheme();

  const clickHandler = (name: string) => {
    let element = document.getElementById(name);

    if (!element) return;

    if (name === "home") {
      document.documentElement.scrollTop = 0;
      return;
    }

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Styles.HeaderWrapper id="home">
      <Image src={"/logo.svg"} alt={"logo"} width={40} height={40} />
      {!isMobile && window.innerWidth > 800 && (
        <Styles.NavWrapper>
          <span onClick={() => clickHandler("home")}>Home</span>
          <span onClick={() => clickHandler("education")}>Education</span>
          <span onClick={() => clickHandler("companies")}>Experience</span>
          <span onClick={() => clickHandler("skills")}>Skills</span>
        </Styles.NavWrapper>
      )}
      {theme === "dark" ? (
        <Image
          style={{ cursor: 'pointer' }}
          onClick={() => setTheme("light")}
          src={"/light.svg"}
          alt="light"
          width={30}
          height={40}
        />
      ) : (
        <Image
          style={{ cursor: 'pointer' }}
          onClick={() => setTheme("dark")}
          src={"/dark.svg"}
          alt="dark"
          width={30}
          height={40}
        />
      )}
    </Styles.HeaderWrapper>
  );
}

export default Header;
