// AboutUs.js
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { WhoWeAre } from './WhoWeAre';
import { Members } from './Members';
import './style.css'
import Aos from 'aos';


export const AboutUs = () => {
  
  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <Container className='AboutUs_Page' >
      <div className='total_aboutus_title'>
        <h2 className='logo_color aboutus_title' data-aos="fade-up" data-aos-duration="550">About Us</h2>
        <div className='underLine' data-aos="fade-up" data-aos-duration="600"></div>
      </div>      
      <WhoWeAre />
      <Members/>
    </Container>
  );
};
