import { useRef } from "react";
import Image from "next/image";
import useReveal from "hooks/useReveal";
import { TitleHeader } from "@/library/header";
import * as Styles from "./styles";

export default function MyPersonalInfo() {
  const personalInfoRef = useRef<HTMLDivElement>(null);

  useReveal(
    personalInfoRef,
    (isInteract: boolean, elem) => {
      if (isInteract) elem.classList.add("reveal-info");
    },
    true
  );

  return (
    <Styles.MyPersonalInfoWrapper ref={personalInfoRef} id="personal-info">
      <TitleHeader headerText = "My Personal Information" />

      <div>
        {personalInfo.map((data) => (
          <Styles.TextWrapper key={data.text}>
            <Image
              src={data.icon}
              alt={data.text}
              width={20}
              height={20}
            />
            <p>{data.text}</p>
          </Styles.TextWrapper>
        ))}
      </div>
      <Styles.CreditWrapper>
        <p>Built by Ajithkumar
          <Image 
            src={'/joy.svg'}
            alt="joy"
            width={20}
            height={20}
          />
        </p>
        <p>Design inspired by Hasnur Alam Ujjol (dribbble)</p>
      </Styles.CreditWrapper>
    </Styles.MyPersonalInfoWrapper>
  );
}

const personalInfo = [
  {
    text: "6369811163, 7339167916",
    icon: "/mobile.svg",
  },
  {
    text: "ajithlinust@gmail.com",
    icon: "/email.svg",
  },
  {
    text: "Coimbatore",
    icon: "/location.svg",
  },
];
