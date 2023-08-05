import Education from './education';
import Skills from './skills';
import Companies from './companies';
import MyPersonalInfo from './myPersonalInfo';
import * as Styles from './styles';

export default function CompanyDetails() {
    return (
        <Styles.CompanyDetailsWrapper>
            <Companies />
            <Skills />
            <Education />
            <MyPersonalInfo />
        </Styles.CompanyDetailsWrapper>
    );
};
