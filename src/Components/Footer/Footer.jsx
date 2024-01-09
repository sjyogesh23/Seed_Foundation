import React, { useEffect, useState } from "react";
import "./footer_style.css";
import Axios from "axios";
const BASE_URL = require("../../global_vars");

export const Footer = (props) => {
  const [contactInfo, setcontactInfo] = useState({});
  const [socialInfo, setsocialInfo] = useState({});

  useEffect(() => {
    Axios.get(`${BASE_URL}/contact-us-content`).then((response) => {
      {setcontactInfo(response.data.body.data);
        console.log(response.data.body.data.socialLinks.ld);
    }
    })
  }, []);


  return (
    <div>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>Seed Foundation of PEC</h3>
              {(contactInfo.desc)?<p>{contactInfo.desc}</p>:''}
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
                  <a href="/Activity">Activities</a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/Team">Team</a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/Initiative">Initiative</a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a href="/Contact">Conatct Us</a>{" "}
                </li>
                {
                  (props.useAuth)?
                  (<li className="nav-item">
                    {" "}
                    <a href="/Profile">Profile</a>{" "}
                  </li>):''
                }
              </ul>
            </div>

            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Us</h5>
              {
                (contactInfo.mobileNo)?
                (<p>
                  <i class="fa-solid fa-phone-volume"></i>
                  {contactInfo.mobileNo}
                </p>):
                ''
              }
              {
                (contactInfo.emailId)?
                (<p>
                  <i class="fa-solid fa-envelope"></i>
                  {contactInfo.emailId}
                </p>):
                ''
              }
              {
                (contactInfo.address)?
                (<p>
                  <i class="fa-solid fa-paper-plane"></i>
                  {contactInfo.address}
                </p>):
                ''
              }
            </div>

            {
              ((contactInfo?.socialLinks?.facebook)||(contactInfo?.socialLinks?.twitter)||(contactInfo?.socialLinks?.instagram)||(contactInfo?.socialLinks?.linkedin))?
              (
                <div className="footer-icons">
                {
                  (contactInfo?.socialLinks?.facebook)?
                  (<a
                    className="fa-brands fa-facebook"
                    href={contactInfo?.socialLinks?.facebook}
                    target="_blank"
                  />):''
                }
                {
                  (contactInfo?.socialLinks?.twitter)?
                  (<a
                    className="fa-brands fa-x-twitter"
                    href={contactInfo?.socialLinks?.twitter}
                    target="_blank"
                  />):''
                }
                {
                  (contactInfo?.socialLinks?.instagram)?
                  (<a
                    className="fa-brands fa-instagram"
                    href={contactInfo?.socialLinks?.instagram}
                    target="_blank"
                  />):''
                }
                {
                  (contactInfo?.socialLinks?.linkedin)?
                  (<a
                    className="fa-brands fa-linkedin-in"
                    href={contactInfo?.socialLinks?.linkedin}
                    target="_blank"
                  />):''
                }
                </div>
              ):''
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};
