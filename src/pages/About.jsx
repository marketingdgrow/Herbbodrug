import React, { Fragment } from "react";

import Banner from "../components/Banner/Banner";
import SectionOne from "../components/AboutSection/SectionOne";
import SectionTwo from "../components/AboutSection/SectionTwo";
import SectionThree from "../components/AboutSection/SectionThree";
import SectionFour from "../components/AboutSection/SectionFour";
import SectionFive from "../components/AboutSection/SectionFive";
import SectionSix from "../components/AboutSection/SectionSix";
import SectionSeven from "../components/AboutSection/SectionSeven";

const About = () => {
  return (
    <Fragment>
      <Banner title="About Us" path={["Home", "About"]} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </Fragment>
  );
};

export default About;
