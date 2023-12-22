import React from 'react'
import "./style.css";
import { Video_cards } from './Video_cards';
import { InputGroup, FormControl,Row, Col, Container } from "react-bootstrap";


export const Videos = () => {
  return (
    <>
    <Container>
      <Row >
        <Col>
          <h2 style={{ color: "#1D617A" }}>Videos</h2>
        </Col>

        <Col xs lg="4">
          <InputGroup className="mb-3 search_bar_div">
            <InputGroup.Text id="search-icon"><i class="fa-solid fa-magnifying-glass"/></InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Search"
              style={{ maxWidth: "350px" }}>
              </FormControl>
          </InputGroup>
        </Col>


      </Row>
    </Container>
    <Video_cards/>
    </>    
  )
}

