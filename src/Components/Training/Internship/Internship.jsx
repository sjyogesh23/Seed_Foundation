import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Card, Pagination } from 'react-bootstrap';
import './style.css';

const podcastsData = [
  {
    id: 1,
    title: 'Internship Title 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt mollitia sequi eos tenetur totam ipsa expedita minima, quis iure corrupti consequuntur facilis quidem? Inventore?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg',
  },
  {
    id: 2,
    title: 'Internship Title 2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt mollitia sequi eos tenetur totam ipsa expedita minima, quis iure corrupti consequuntur facilis quidem? Inventore?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg',
  },
  {
    id: 3,
    title: 'Internship Title 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt mollitia sequi eos tenetur totam ipsa expedita minima, quis iure corrupti consequuntur facilis quidem? Inventore?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg',
  },
  {
    id: 4,
    title: 'Internship Title 4',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt mollitia sequi eos tenetur totam ipsa expedita minima, quis iure corrupti consequuntur facilis quidem? Inventore?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg',
  },
  {
    id: 5,
    title: 'Internship Title 5',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt mollitia sequi eos tenetur totam ipsa expedita minima, quis iure corrupti consequuntur facilis quidem? Inventore?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg',
  },
  {
    id: 6,
    title: 'Internship Title 6',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt mollitia sequi eos tenetur totam ipsa expedita minima, quis iure corrupti consequuntur facilis quidem? Inventore?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg',
  },
];

export const Internship = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(podcastsData.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = podcastsData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 style={{ color: "#1D617A" }}>Internship</h2>
          </Col>

          <Col xs lg="4">
            <InputGroup className="mb-3 search_bar_div">
              <InputGroup.Text id="search-icon"><i className="fa-solid fa-magnifying-glass" /></InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Search"
                style={{ maxWidth: "350px" }}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Container className='pod_divs'>
        {currentCards.map((podcast) => (
          <Card key={podcast.id} className="e_pod" style={{border:'0px'}}>
            <Row>
              <Col md={4}>
                <Card.Img variant="top" src={podcast.imageUrl} alt={`Podcast ${podcast.id}`} className="pod_img" />
              </Col>
              <Col md={6}>
                <Card.Body className="pod_txts">
                  <Card.Title className="pod_title">{podcast.title}</Card.Title>
                  <Card.Text className="pod_des">{podcast.description}</Card.Text>
                  <Button className="registerbtn">Register</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
        <Pagination className="mt-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>

      </Container>
    </div>
  );
}
