import Image from "next/image";
import * as Styles from "./styles";
import { Header } from "../styles";

export default function Skills() {
  return (
    <Styles.SkillsWrapper id="skills">
      <Header>{`I'm Specialized In`}</Header>
      <div>
        {data.map((d) => (
          <Styles.LanguageWrapper key={d.name}>
            <Image
              style={
                d.name === "JavaScript" || d.name === "Typescript"
                  ? undefined
                  : {
                      background: "white",
                      padding: "5px",
                    }
              }
              src={d.icon}
              alt={d.name}
              width={60}
              height={60}
            />
            <div>
              <label>{d.name}</label>
              <span>
                Results-oriented Professional with {" "}
                <span>
                  {d.name === "Next JS" ? "6 months" : "almost 3 years"}
                </span>{" "}
                of experience
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
