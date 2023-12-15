import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import images1 from './image1.png';

export const Carousels = () => {
    var heroData = [
        {
          id: 1,
          image: images1,
          title: 'SEED Foundation 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        },
        {
          id: 2,
          image: images1,
          title: 'SEED Foundation 2',
        },
        {
          id: 3,
          image: images1,
        }
      ]      

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
                    src={hero.image}
                    alt={"slide " + hero.id}
                    style={{ height: '500px' }}
                  />
                  <Carousel.Caption>
                    <h3>{hero.title}</h3>
                    <p>{hero.description}</p>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
        }
        
      </Carousel>
    );
}
