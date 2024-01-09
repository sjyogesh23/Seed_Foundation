import "./home_style.css";
import { Carousels } from "./Carousels";
import { Quote } from "./Quote";
import { useEffect } from "react";
import Aos from 'aos';

export const Home = () => {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <>
    <div>
      <Carousels/>
    </div>
    <div data-aos="zoom-in">
      <Quote/>
    </div>
    </>
  )
}
