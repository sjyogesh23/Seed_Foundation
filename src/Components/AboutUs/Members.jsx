import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import Aos from 'aos';

export const Members = () => {
  const members = [
        {
          id: 1,
          name: 'John Doe',
          position: 'Founder & CEO',
          companyName: 'ABC Corp',
          image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', 
        },
        {
          id: 2,
          name: 'Jane Smith',
          position: 'CTO',
          companyName: 'XYZ Tech',
          image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', 
        },
        
        {
          id: 3,
          name: 'Jane Smith',
          position: 'CTO',
          companyName: 'XYZ Tech',
          image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', 
        },
        
        {
          id: 4,
          name: 'Jane Smith',
          position: 'CTO',
          companyName: 'XYZ Tech',
          image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', 
        },
        
        {
          id: 5,
          name: 'Jane Smith',
          position: 'CTO',
          companyName: 'XYZ Tech',
          image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', 
        },
        
        {
          id: 6,
          name: 'Jane Smith',
          position: 'CTO',
          companyName: 'XYZ Tech',
          image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg', 
        },
        {
          id: 7,
          name: 'Jane Smith',
          position: 'CTO',
          companyName: 'XYZ Tech',
          image: 'https://i.pinimg.com/736x/63/d9/f7/63d9f756c417fb4b770235d8689fe3bb.jpg',
        },
  ];

  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <div >
        <h3 className="my-4 logo_color" data-aos="fade-up" data-aos-duration="850">Members</h3>

        <Row className='member_div'>
          {members.map((member) => (
            <Col className="member_col" key={member.id} md={3} data-aos="fade-up" data-aos-duration="850">

              <Card className="mb-4 member_card">

                <Card.Img className='d-block w-100 object-fit-cover member_card_img' variant="top" src={member.image} alt={member.name} />
                
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.position}</Card.Text>
                  <Card.Text>{member.companyName}</Card.Text>
                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>
    </div>
  )
}
