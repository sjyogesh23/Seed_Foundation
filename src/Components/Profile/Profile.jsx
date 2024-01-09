import React from 'react'
import { Button, Container } from 'react-bootstrap';
import './profile_style.css';
// import { Training } from './Training';
import { Link } from 'react-router-dom';

export const Profile = ({ setUserData, userAttributes }) => {
  const details = {
    role: 'Student',
    name: 'Yogesh SJ',
    mailid: 'summa@gmail.com',
    degree: 'B.Tech',
    dept: 'CSE',
    year: '2019',
  };

  const handleSignOut = () => {
    setUserData(false);
    localStorage.removeItem('userData');
    return <Link to="/" />;
  };
  return (
    <div>
        <Container>
          <div className="profile_container">
            <div className="profile_title">
              Hola {details.role}{' '}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
              ,
            </div>

            <div className="profile_details_title">Personal Details:</div>
            <div className="profile_details">
              <div>
                <span className="profile_subtitle">Name: </span>
                {details.name}
              </div>
              <div>
                <span className="profile_subtitle">E-mail ID: </span>
                {details.mailid}
              </div>
              <div>
                <span className="profile_subtitle">Degree: </span>
                {details.degree}
              </div>
              <div>
                <span className="profile_subtitle">Department: </span>
                {details.dept}
              </div>
              <div>
                <span className="profile_subtitle">Year of joining: </span>
                {details.year}
              </div>
            </div>
            {
            (details.role==='Member')?(
                <div className='member_certificate'>
                <div className="profile-details-title">80G Certificate:</div>
                <div>
                    View 80G Document in PDF Format:<br/>
                    <a href='https://www.africau.edu/images/default/sample.pdf' target='blank'><button className='member-certificate-download'>View</button></a>
                </div>
                </div>
            ):(''
              // <Training/>
            )
            }
            <Button as={Link} to="/" variant="danger" style={{margin:'20px 0px'}} onClick={handleSignOut}>Sign Out</Button>
          </div>
        </Container>
    </div>
  )
}
