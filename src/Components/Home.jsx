import "./Home/style.css";
import { Carousels } from "./Home/Carousels";
import { Quote } from "./Home/Quote";
import { useEffect } from "react";
import Aos from 'aos';

export const Home = () => {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <>
    <div data-aos="fade-up">
      <Carousels/>
    </div>
    <div data-aos="zoom-in">
      <Quote/>
    </div>
    </>
  )
}
