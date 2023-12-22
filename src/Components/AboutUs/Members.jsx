import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import Aos from 'aos';
import Axios from "axios";
const BASE_URL = require("../../global_vars");


export const Members = () => {

  const [members, setmembers] = useState([]);

  useEffect(()=>{
    Aos.init();
    console.log(`${BASE_URL}/about_us_content/member-details`)
    Axios.get(`${BASE_URL}/about_us_content/member-details`).then(
      (response) => setmembers(response.data.body.data)
    )
  }, [])

  return (
    <div >
        <h3 className="my-4 logo_color" data-aos="fade-up" data-aos-duration="850">Members</h3>

        <Row className='member_div'>
          {members.map((member) => (
            <Col className="member_col" key={member.id} md={3} data-aos="fade-up" data-aos-duration="850">

              <Card className="mb-4 member_card h-80 w-100">

                <Card.Img className='d-block w-100 object-fit-cover member_card_img' variant="top" src={member.imageUrl} alt={member.name} />
                
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mb-1">{member.name}</Card.Title>
                  <Card.Text className="mb-1">{member.position}</Card.Text>
                  <Card.Text className="mt-auto">{member.companyName}</Card.Text>
                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>
    </div>
  )
}
