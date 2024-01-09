import { useEffect, useState } from 'react';
import Axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import "./home_style.css"; 

const BASE_URL = require("../../global_vars");

export const Carousels = () => {
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`${BASE_URL}/home_content`).then(
      (response) => {
        setHeroData(response.data.body.data);
        setLoading(false); // Set loading to false once data is fetched
      }
    );
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={`home_carousel-container ${loading ? 'loading' : ''}`}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>
            <div className="home_image-container">
              <div className="home_background-image" style={{ backgroundImage: `url(${hero.imageUrl})` }}></div>
               <img
                style={{ height: '100%', width: '100%', objectFit: 'contain'}}
                src={hero.imageUrl}
                alt={`foreground ${hero.id}`}
              />
            </div>
            <Carousel.Caption>
              <h3>{hero.title}</h3>
              <p>{hero.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
