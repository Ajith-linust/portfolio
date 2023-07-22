import Image from "next/image";
import * as Styles from "./styles";
import { Header } from "../styles";

export default function Education() {
  return (
    <Styles.EducationWrapper id="education">
      <Header>Educational Qualification</Header>

      <Image src={"/books.svg"} alt={"books"} width={300} height={300} />

      <div>
        <Styles.EducationBlock>
          <div>
            <p>Sns college of technology</p>
            <label>Computer science and engineering</label>
            <article>
              I graduated my course with{" "}
              <span>
                8.2 CGPA{" "}
                <Image src={"/joy.svg"} alt={"joy"} width={20} height={20} />
              </span>
            </article>
          </div>
          <div>
            <p>Shri k.k naidu hr.sec.school</p>
            <label>Computer science</label>
            <article>
              I graduated my 12<sup>th</sup> grade with{" "}
              <span>
                63%
                <Image src={"/cry.svg"} alt={"cry"} width={20} height={20} />
              </span>
            </article>
          </div>
          <div>
            <p>Shri k.k naidu hr.sec.school</p>
            <label>( General )</label>
            <article>
              I graduated my 10<sup>th</sup> grade with{" "}
              <span>
                85%{" "}
                <Image src={"/star.svg"} alt={"star"} width={20} height={20} />
              </span>
            </article>
          </div>
        </Styles.EducationBlock>
      </div>
    </Styles.EducationWrapper>
  );
}
