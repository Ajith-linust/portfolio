"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import * as Styles from "./styles";

function Header({
  isMobile,
  theme,
  setTheme,
}: {
  isMobile: boolean;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}) {
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
      {!isMobile && (
        <Styles.NavWrapper>
          <span onClick={() => clickHandler("home")}>Home</span>
          <span onClick={() => clickHandler("education")}>Education</span>
          <span onClick={() => clickHandler("companies")}>Experience</span>
          <span onClick={() => clickHandler("skills")}>Skills</span>
        </Styles.NavWrapper>
      )}
      {theme === "light" && (
        <Image
          style={{ cursor: "pointer" }}
          onClick={() => {
            setTheme("dark");
          }}
          src={"/light.svg"}
          alt="light"
          width={30}
          height={30}
        />
      )}
      {theme === "dark" && (
        <Image
          style={{ cursor: "pointer" }}
          onClick={() => {
            setTheme("light");
          }}
          src={"/dark.svg"}
          alt="dark"
          width={30}
          height={30}
        />
      )}
    </Styles.HeaderWrapper>
  );
}

export default Header;
