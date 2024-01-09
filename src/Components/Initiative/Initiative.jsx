import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { InitHeader } from "./InitHeader";
import { Training } from "./Training";
import "./Initiativestyle.css";
import Axios from "axios";
import BASE_URL from "../../global_vars";

export const Initiative = () => {
  const [overview, setOverview] = useState([]);
  const [Loi, setLoi] = useState([]);

  useEffect(() => {
    Axios.get(`${BASE_URL}/initiative/overview-of-initiatives`).then(
      (resoponse) => {
        // console.log("overview", resoponse)
        setOverview(resoponse.data.body.data);
      }
    );
    Axios.get(`${BASE_URL}/initiative/line_of_initiatives`).then(
      (resoponse) => {
        // console.log("Loi", resoponse)
        setLoi(resoponse.data.body.data);
      }
    );
  }, []);

  return (
    <Container>
      <div className="total_aboutus_title Initiative_Title">
        <h2 className="logo_color" style={{ textAlign: "center" }}>
          Our Initiative
        </h2>
        <div className="underLine"></div>
      </div>
      <InitHeader overview={overview} Loi={Loi} />
      <Training />
    </Container>
  );
};
