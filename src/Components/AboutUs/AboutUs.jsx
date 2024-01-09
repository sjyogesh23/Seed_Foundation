import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { WhoWeAre } from "./WhoWeAre";
import "./About_style.css";
import Aos from "aos";
import { Learn } from "./Learn";
import Axios from "axios";
import BASE_URL from "../../global_vars";

export const AboutUs = () => {
  let [contentResponse, putContentResponse] = useState({});


  const fullPageOptions = {
    scrollSensitivity: 7,
    touchSensitivity: 5,
    scrollSpeed: 500,
    resetSlides: true,
  };

  useEffect(() => {
    Axios.get(`${BASE_URL}/about_us_content`)
      .then((response) => {
        putContentResponse(response?.data);
      })
      .catch((err) => console.log(err));
    Aos.init();
  }, []);

  return (
    <Container className="AboutUs_Page">
      <div className="about_total_aboutus_title">
        <h2 className="logo_color">
          About Us
        </h2>
        <div
          className="about_underLine"
        ></div>
      </div>



      <WhoWeAre
        mission={contentResponse?.ourMission}
        vision={contentResponse?.ourVision}
        whoweare={contentResponse?.whoWeAre}
      />

      <div>
        <h2 className="logo_color learn_more_title">
          More About Us
        </h2>
      </div>
      <Learn
        emergence={contentResponse?.emergence}
        future={contentResponse?.future}
        purpose={contentResponse?.purpose}
        table = {contentResponse?.purpose?.table}
      />
    </Container>
  );
};
