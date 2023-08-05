import Image from "next/image";
import { companyDetails } from "./contants";
import { TitleHeader } from "@/library/header";
import * as Styles from "./styles";
import { useRef } from "react";
import useReveal from "hooks/useReveal";

export default function Companies() {
  return (
    <Styles.CompaniesWrapper id="companies">
      <TitleHeader headerText="Experience" />

      <Styles.CompaniesBlock>
        {companyDetails.map((data, index) => (
          <div key={data.name}>
            <Project data={data} index={index} />
          </div>
        ))}
      </Styles.CompaniesBlock>
    </Styles.CompaniesWrapper>
  );
}

function Project({
  data,
  index
}: {
  index: number;
  data: {
    name: string;
    icon: string;
    projects: {
      name: string;
      description: string;
      achievements: string[];
    }[];
  };
}) {
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  useReveal(
    projectRef,
    (isInteract: boolean) => {
      if (isInteract) {
        (projectRef.current as HTMLDivElement).style.opacity = "1";
      }
    },
    true
  );

  return (
    <>
      <Styles.Title ref={titleRef}>
        <Image
          src={data.icon}
          alt={data.name}
          width={index === 0 ? 40 : 26}
          height={index === 0 ? 40 : 26}
        />
        {data.name}
      </Styles.Title>
      <Styles.ProjectWrapper ref={projectRef}>
        {data.projects.map((d) => (
          <Styles.ProjectBlock key={d.name}>
            <p>{d.name}</p>
            <article>{d.description}</article>
            <ul>
              {d.achievements.map((achivement) => (
                <li key={achivement}>{achivement}</li>
              ))}
            </ul>
          </Styles.ProjectBlock>
        ))}
      </Styles.ProjectWrapper>
    </>
  );
}
