import React, { Fragment } from "react";
import Banner from "../components/Banner/Banner";
import AyurvedaEnquiry from "../components/Booking/AyurvedaEnquiry";

const Contact = () => {
  return (
    <Fragment>
      <Banner title="Contact" path={["Home", "Contact"]} />

      <AyurvedaEnquiry />
    </Fragment>
  );
};

export default Contact;
