
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Box } from '@mui/material';
import { Row, Col, Card, Container } from 'react-bootstrap';
import axios from 'axios';
import './team_style.css';
import BASE_URL from '../../global_vars';

const Members = ({ positionFilter }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/about_us_content/member-details`)
  .then(response => {
    // Handle the successful response
    console.log(response.data.body.data);
    setMembers(response.data.body.data);
    // Now you can set the data to your component's state or use it as needed
  })
  .catch(error => {
    // Handle the error
    console.error('Error fetching data:', error);
  });
  }, [positionFilter]);

  const filteredMembers = members?.filter((member) => member.position === positionFilter);

  console.log('Filtered Members:', filteredMembers);

  return (
    <div className="team" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', width: '100%' }}>
      <Row className="member_div">
        {filteredMembers.map((member, index) => (
          <React.Fragment key={member.id}>
            <Col xs={12} sm={12} md={6} lg={4} className="member_col">
              <Card className="mb-4 member_card">
                <Card.Img className='d-block object-fit-cover member_card_img' variant="top" src={member.imageUrl} alt={member.name} />
                <Card.Body className="d-flex flex-column body">
                  <Card.Title className="mb-1 name">{member.name}</Card.Title>
                  <Card.Text className="mb-1 position">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
};


const CustomizedTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontSize: theme.typography.pxToRem(15),
  minWidth: "0",
    margin: '0 5px',
    '&:focus': {
      opacity: 1,
    },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
      {...other}
    >
      {value === index && (
        <Box p={3} width="100%" className="common-tab-content">
          {children}
        </Box>
      )}
    </div>
  );
};

export const Team = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', overflowX:'hidden' }}>
       <div className='total_aboutus_title Team_Title'>
        <h2 className='logo_color' style={{ textAlign: 'center' }}>Team</h2>
        <div className='underLine'></div>
      </div>
      <Box textAlign="center" borderBottom="1px solid #e8e8e8" mb={2}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{ justifyContent: 'center' }}
        >
          <CustomizedTab label="Core Leadership Team" />
          <CustomizedTab label="Leads of Initiatives" />
          <CustomizedTab label="Department Vertical Leads" />
        </Tabs>
      </Box>
      <div >
        <Members
          positionFilter={
            value === 0 ? 'Core Leadership Team' : value === 1 ? 'Leads of Initiatives' : 'Department Vertical Leads'
          }
        />
      </div>
    </Container>
  );
};

/*import React, { useEffect, useState } from "react";
import { Tab, Tabs, Row, Col, Card,Container } from "react-bootstrap";
import { Box } from '@mui/material';
import "./style.css";
import Aos from "aos";
import Axios from "axios";
import BASE_URL from "../../global_vars";
import { styled } from "@material-ui/core";


const Members = ({ positionFilter }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Make an Axios request to fetch data from the API
    Axios.get('YOUR_API_ENDPOINT') // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      .then((response) => {
        console.log('Axios success:', response.data);
        setMembers(response.data);
      })
      .catch((error) => {
        console.error('Axios error:', error);
      });
  }, []);


export const Members = ({ positionFilter }) => {
  const [contentResponse, putContentResponse] = useState([]);

  useEffect(() => {
    Axios.get(`${BASE_URL}/about_us_content/member-details`)
      .then((response) => {
        putContentResponse(response?.data.members); // Assuming 'members' is the array within the response
      })
      .catch((err) => console.log(err));
    Aos.init();
  }, []);

  const filteredMembers = contentResponse.filter((member) => member.position === positionFilter);

  return (
    <div className="team" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', width: '100%' }}>
      <Row className="member_div">
        {filteredMembers.map((member, index) => (
          <React.Fragment key={member.id}>
            <Col xs={12} sm={12} md={6} lg={4} className="member_col">
              <Card className="mb-4 member_card">
                <Card.Img className='d-block object-fit-cover member_card_img' variant="top" src={member.imageUrl} alt={member.name} />
                <Card.Body className="d-flex flex-column body">
                  <Card.Title className="mb-1 name">{member.name}</Card.Title>
                  <Card.Text className="mb-1 position">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
};


const CustomizedTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontSize: theme.typography.pxToRem(15),
  minWidth: "0",
  margin: '0 5px',
  '&:focus': {
    opacity: 1,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
      {...other}
    >
      {value === index && (
        <Box p={3} width="100%" className="common-tab-content">
          {children}
        </Box>
      )}
    </div>
  );
};

export const Team = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', overflowX:'hidden' }}>
      <div className='total_aboutus_title Team_Title'>
        <h2 className='logo_color' style={{ textAlign: 'center' }}>Team</h2>
        <div className='underLine'></div>
      </div>
      <Box textAlign="center" borderBottom="1px solid #e8e8e8" mb={2}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{ justifyContent: 'center' }}
        >
          <CustomizedTab label="Core Leadership Team" />
          <CustomizedTab label="Leads of Initiatives" />
          <CustomizedTab label="Department Vertical Leads" />
        </Tabs>
      </Box>
      <div>
        <Members
          positionFilter={
            value === 0 ? 'Core Leader' : value === 1 ? 'Initiative Leader' : 'Department Vertical Leads'
          }
        />
      </div>
    </Container>
  );
};*/
