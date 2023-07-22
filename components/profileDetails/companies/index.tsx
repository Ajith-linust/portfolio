import Image from "next/image";
import { companyDetails } from "./contants";
import * as Styles from "./styles";
import { Header } from "../styles";

export default function Companies() {
  return (
    <Styles.CompaniesWrapper id="companies">
      <Header>{`Experience`}</Header>
      <Styles.CompaniesBlock>
        {companyDetails.map((data, index) => (
          <div key={data.name}>
            <Styles.Title>
              <Image
                src={data.icon}
                alt={data.name}
                width={index === 0 ? 40 : 26}
                height={index === 0 ? 40 : 26}
              />
              {data.name}
            </Styles.Title>
            <Styles.ProjectWrapper>
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
          </div>
        ))}
      </Styles.CompaniesBlock>
    </Styles.CompaniesWrapper>
  );
}
