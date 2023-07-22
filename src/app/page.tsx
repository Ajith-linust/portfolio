"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import UserInformation from "@/components/userInformation";
import Header from "@/components/header";
import CompanyDetails from "@/components/profileDetails";
import * as Styles from "./styles";

const MobileNavBar = dynamic(() => import("@/library/mobileNavBar"));

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      if(window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <Styles.PortfolioWrapper>
      <Header isMobile={isMobile} />
      <UserInformation />
      <CompanyDetails />
      {isMobile && <MobileNavBar />}
    </Styles.PortfolioWrapper>
  );
}

export default Home;
