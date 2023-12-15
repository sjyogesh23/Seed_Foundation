import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const members = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Founder & CEO',
    companyName: 'ABC Corp',
    image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', // URL to member's image
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'CTO',
    companyName: 'XYZ Tech',
    image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', // URL to member's image
  },
  
  {
    id: 3,
    name: 'Jane Smith',
    position: 'CTO',
    companyName: 'XYZ Tech',
    image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', // URL to member's image
  },
  
  {
    id: 4,
    name: 'Jane Smith',
    position: 'CTO',
    companyName: 'XYZ Tech',
    image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', // URL to member's image
  },
  
  {
    id: 5,
    name: 'Jane Smith',
    position: 'CTO',
    companyName: 'XYZ Tech',
    image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', // URL to member's image
  },
  
  {
    id: 6,
    name: 'Jane Smith',
    position: 'CTO',
    companyName: 'XYZ Tech',
    image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', // URL to member's image
  },
  // Add more members as needed
];

export const ZAbout = () => {
  return (
    <Container>
      <h2 className="my-4">About Us</h2>
      <h3>Who We Are</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod leo ut
        justo condimentum, sit amet rhoncus orci consequat. Sed sodales risus eget enim
        pellentesque, sit amet facilisis nulla ultrices.
      </p>


      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Mission</Card.Title>
              <Card.Text>
                Our mission is to <strong>Technological & Leadership Empowerment of the Students of PTU through Innovation and Applied Engineering.</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Vision</Card.Title>
              <Card.Text>
                Our vision is to <strong>Prepare the Students of PTU for a smooth transition to the Industry by helping them hone the required skills ahead of time.
</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <h3 className="my-4">Members</h3>
      <Row>
        {members.map((member) => (
          <Col key={member.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={member.image} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
                <Card.Text>{member.companyName}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};
