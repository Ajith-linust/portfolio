import Image from "next/image";
import * as Styles from "./styles";
import { Header } from "../styles";

export default function Skills() {
  return (
    <Styles.SkillsWrapper id="skills">
      <Header>I'm Specialized In</Header>
      <div>
        {data.map((d) => (
          <Styles.LanguageWrapper>
            <Image src={d.icon} alt={d.name} width={60} height={60} />
            <div>
              <label>{d.name}</label>
              <span>
                I am a profressional with {d.name} with 
                <span>{d.name === "Next JS" ? " 6 months" : " 2.10 years"}</span> of experience
              </span>
            </div>
          </Styles.LanguageWrapper>
        ))}
      </div>
    </Styles.SkillsWrapper>
  );
}

const data = [
  {
    name: "React JS",
    icon: "/reactLogo.svg",
  },
  {
    name: "Next JS",
    icon: "/nextjs.svg",
  },
  {
    name: "JavaScript",
    icon: "/javascriptLogo.svg",
  },
  {
    name: "Typescript",
    icon: "/typescript.svg",
  },
  {
    name: "Redux",
    icon: "/redux.svg",
  },
  {
    name: "HTML",
    icon: "/html.svg",
  },
  {
    name: "CSS",
    icon: "/css.svg",
  },
  {
    name: "Styled-Components",
    icon: "/styled-components-logo.png",
  },
];
