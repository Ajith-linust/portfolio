import Image from "next/image";
import { TitleHeader } from "@/library/header";
import * as Styles from "./styles";

export default function Education() {

  let educationsDetails = [
    {
      name: "Sns college of technology",
      course: "Computer Science & Engineering",
      graduateText: "I graduated my course with",
      score: "8.2 CGPA",
      image: "joy",
    },
    {
      name: "Shri k.k naidu hr.sec.school",
      course: "Computer Science",
      graduateText: "I graduated my 12th grade with",
      score: "63%",
      image: "cry",
    },
    {
      name: "Sns college of technology",
      course: "( General )",
      graduateText: "I graduated my 10th grade with",
      score: "85%",
      image: "star",
    },
  ];

  return (
    <Styles.EducationWrapper id="education">
      <TitleHeader headerText="Educational Qualification" />

      <Styles.EducationBlock>
        {educationsDetails.map((d) => (
          <div key={d.name}>
            <p>{d.name}</p>
            <label>{d.course}</label>
            <article>
              {d.graduateText} <span>{d.score}</span>
            </article>
            <Image
              src={`/${d.image}.svg`}
              alt={d.image}
              width={50}
              height={50}
            />
          </div>
        ))}
      </Styles.EducationBlock>
    </Styles.EducationWrapper>
  );
}
