"use client";

import Image from "next/image";
import Button from "@/library/button";
import { ButtonTypes } from "@/library/button/constants";
import * as Styles from "./styles";

export default function UserInformation() {

  const hireHandler = () => {
    document.documentElement.scrollTop =
      document.documentElement.scrollHeight +
      document.documentElement.clientHeight;
  };

  return (
    <Styles.UserInfoWrapper>
      <Styles.LeftWrapper>
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stop-color="rgba(64.67, 55, 248, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stop-color="rgba(161.261, 31, 251, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M22.3,-37.7C29,-34.7,34.7,-29,37.7,-22.3C40.7,-15.6,40.9,-7.8,40.6,-0.2C40.3,7.4,39.4,14.9,35.8,20.3C32.1,25.8,25.5,29.3,19.1,33.4C12.7,37.5,6.3,42.2,-0.7,43.5C-7.8,44.7,-15.6,42.6,-21.2,38C-26.9,33.5,-30.5,26.6,-33,19.9C-35.5,13.1,-36.9,6.6,-38.5,-0.9C-40,-8.3,-41.6,-16.6,-39.2,-23.6C-36.8,-30.5,-30.4,-36.1,-23.2,-38.8C-16,-41.5,-8,-41.4,-0.1,-41.2C7.8,-41,15.6,-40.7,22.3,-37.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            stroke="url(#sw-gradient)"
          ></path>
        </svg>
        <p>
          <span>{`FrontEnd`}</span> {`Web Developer`}
        </p>
        <h1>{`Hey, I'm Ajithkumar Balakrishnan`}</h1>
        <article>
          {`Results-oriented Professional with almost 3 years of experience in ui
          development, React js, Next js, Typescript, Javascript, HTML, CSS,
          Redux and styled-components (library).`}
        </article>
        <Button
          ripple
          width="100px"
          height="37px"
          onClick={hireHandler}
          variant={ButtonTypes.PRIMARY}
          styles={`margin-block: 20px;`}
        >
          Hire me
        </Button>
        <a href="https://github.com/Ajith-linust/portfolio" target="_blank">
          <Image
            src={"/github.svg"}
            alt={"developer"}
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ajithkumar-balakrishnan-706493244/"
          target="_blank"
        >
          <Image
            src={"/linkedin.svg"}
            alt={"developer"}
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </a>
      </Styles.LeftWrapper>
      <Styles.RightWrapper>
        <Image
          src={"/developer.png"}
          alt={"developer"}
          width={500}
          height={500}
          priority
        />
        <p>UI Developer</p>
      </Styles.RightWrapper>
    </Styles.UserInfoWrapper>
  );
}
