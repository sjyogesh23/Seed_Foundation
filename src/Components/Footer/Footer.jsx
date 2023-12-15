import React from 'react'
import './style.css';

export const Footer = () => {
    let org_mobile = "+91 8925263943";
    let org_email = "seedfoundation@gmail.com";    
    let org_address = "Chennai, India";
  return (
    <>
        <div className="Footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <h3>Seed Foundation of PEC</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                        
                    </div>

                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <h5>Quick Links</h5>
                        <ul>
                            <li className="nav-item"> <a href="/AboutUs">About Us</a> </li>
                            <li className="nav-item"> <a href="/Initiative">Initiative</a> </li>
                            <li className="nav-item"> <a href="/Training/Videos">Videos</a> </li>
                            <li className="nav-item"> <a href="/Training/Articals">Podcast</a> </li>
                            <li className="nav-item"> <a href="/Training/Podcast">Articals</a> </li>                            
                            <li className="nav-item"> <a href="/Training/Internship">Internship</a> </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <h5>Contact Us</h5>
                        <p><i class="fa-solid fa-phone-volume"></i>{org_mobile}</p>
                        <p><i class="fa-solid fa-envelope"></i>{org_email}</p>
                        <p><i class="fa-solid fa-paper-plane"></i>{org_address}</p>
                    </div>
                    <div className="footer-icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
