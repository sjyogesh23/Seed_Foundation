import { useEffect, useState } from 'react';
import Axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
const BASE_URL = require("../../global_vars");
//import images1 from './image1.png';


export const Carousels = () => {
    const [heroData, setheroData] = useState([]);

    useEffect(() => {
      console.log(`${BASE_URL}/home_content`)
      Axios.get(`${BASE_URL}/home_content`).then(
        (response) => setheroData(response.data.body.data)
      )
    }, [])
    

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100 object-fit-cover"
                    src={hero.imageUrl}
                    alt={"slide " + hero.id}
                    style={{ height: '500px' }}
                  />
                  <Carousel.Caption>
                    <h3>{hero.title}</h3>
                    <p>{hero.desc}</p>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
        }
        
      </Carousel>
    );
}
