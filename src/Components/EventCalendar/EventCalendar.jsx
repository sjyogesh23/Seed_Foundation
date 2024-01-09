import './event_style.css';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const events = [
    { date: '27/12/2023', title: 'Event Day', description: 'Description 1', url: 'https://example.com/event1', category: 'Category 1' },
    { date: '27/12/2023', title: 'Event Day', description: 'Description 1', category: 'Category 1' },
    { date: '25/12/2023', title: 'Christmas Day', description: 'Description 2', url: 'https://example.com/event2', category: 'Category 2' },
    { date: '01/01/2024', title: 'Example Event', description: 'Description 3', url: 'https://example.com/event3', category: 'Category 3' },
  ];

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const formatDate = (date) => {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getEventsForDate = (selectedDate) => {
    const formattedDate = formatDate(selectedDate);
    return events.filter((event) => event.date === formattedDate);
  };

  const tileContent = ({ date, view }) => {
    const hasEvent = getEventsForDate(date).length > 0;
    if (view === 'month') {
      return hasEvent ? <div className="event_marker"></div> : null;
    }
    return null;
  };

  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Container className="event_calendar_container">
      <div className='total_aboutus_title'>
        <h2 className='logo_color aboutus_title' data-aos="fade-up" data-aos-duration="550">Event Calender</h2>
        <div className='underLine' data-aos="fade-up" data-aos-duration="600"></div>
      </div>
      <Row className="mt-4">
        <Col md={6} className="col_cal">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileContent={tileContent}
            className="custom_calendar"
          />
        </Col>
        <Col md={6} className="col_cal">
          <Card className="mt-4 event-list-card" style={{borderRadius:'10px'}}>
            <div className="event_list_header">
              Events on {formatDate(date)}
            </div>
            <Card.Body>
              <ul className="event_list">
                {getEventsForDate(date).map((event, index) => (
                  <li key={index} className="event_item">
                    <strong>{event.title}</strong>
                    <p className="event_category">{event.category}</p>
                    <p className="event_description">{event.description}</p>
                    {event.url && (
                      <Button className="event_btn" variant="primary" onClick={() => handleButtonClick(event.url)}>
                        Register
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
