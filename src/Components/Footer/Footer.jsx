import React, { useEffect, useState } from "react";
import "./style.css";
import Axios from "axios";
const BASE_URL = require("../../global_vars");

export const Footer = () => {
  const [contactInfo, setcontactInfo] = useState({});
  const [socialInfo, setsocialInfo] = useState({});

  //setsocialInfo(response.data.body.data.socialLinks)
  useEffect(() => {
    Axios.get(`${BASE_URL}/contact-us-content`).then((response) => {
      {setcontactInfo(response.data.body.data);
        console.log(response.data.body.data.socialLinks.ld);
    }
    })
  }, []);

  // let org_mobile = "+91 8925263943";
  // let org_email = "seedfoundation@gmail.com";
  // let org_address = "Chennai, India";
  // let org_des = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.";

  // let facebook="https://twitter.com/home?lang=en"
  // let x="https://twitter.com/home?lang=en"
  // let instagram="https://twitter.com/home?lang=en"
  // let linkedin="https://twitter.com/home?lang=en"

  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>Seed Foundation of PEC</h3>
              <p>{contactInfo.desc}</p>
            </div>

            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  {" "}
                  <a href="/">Home</a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/AboutUs">About Us</a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/Initiative">Initiative</a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/Training/Videos">Videos</a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/Training/Articals">Podcast</a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/Training/Podcast">Articals</a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/Training/Internship">Internship</a>{" "}
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Us</h5>
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                {contactInfo.mobileNo}
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i>
                {contactInfo.emailId}
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i>
                {contactInfo.address}
              </p>
            </div>
            <div className="footer-icons">
              <a
                className="fa-brands fa-facebook"
                href={contactInfo?.socialLinks?.facebook}
                target="_blank"
              />
              <a
                className="fa-brands fa-x-twitter"
                href={contactInfo?.socialLinks?.twitter}
                target="_blank"
              />
              <a
                className="fa-brands fa-instagram"
                href={contactInfo?.socialLinks?.instagram}
                target="_blank"
              />
              <a
                className="fa-brands fa-linkedin-in"
                href={contactInfo?.socialLinks?.linkedin}
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*a = {
  statuscode: 200,
  body: {
    data: {
      ContactUsID: 0,
      emailId: "suma@gmail.com",
      mobileNo: 9999999876,
      address: "dubai main road, dubai kuruku sandu, dubai",
      socialLinks: {
        twitter: "https://twitter.com/home",
        linkedin: "https://www.linkedin.com",
        instagram: "https://www.instagram.com",
        facebook: "https://www.facebook.com",
      },
      desc: "some discription",
    },
    count: 1,
  },
};*/
