
import {React, useEffect, useState} from 'react';
import { Container, Card } from 'react-bootstrap';
import './activity_style.css';
import Axios from "axios"
import BASE_URL from "../../global_vars"

export const Activity = () => {
  const [activities, setActivities] = useState([]); 

  useEffect(() => {
    Axios.get(`${BASE_URL}/activities`).then(
      (response) => {
        console.log(response.data)
        setActivities(response.data.body.activities)
      }
    );
  }, [])
  


  return (
    <Container className="activity_container">
      <div>
        <h2 className="logo_color activity_heading">Our Activities</h2>
        <div className="underLine"/>
      </div>

      <div className='activity'>
        {activities.map((activity, index) => (
          <Card key={index} className="activity_card">
            <div className="activity_title">{activity.title}</div>
            <Card.Body>
              <ul className="activity_list">
                {activity.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="activity_list_item">{detail}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};


// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import "./style.css";
// import Aos from "aos";
// import Axios from "axios";
// import BASE_URL from "../../global_vars";

// export const Activity = () => {
//   let [contentResponse, putContentResponse] = useState({});


//   const fullPageOptions = {
//     scrollSensitivity: 7,
//     touchSensitivity: 5,
//     scrollSpeed: 500,
//     resetSlides: true,
//   };

//   useEffect(() => {
//     Axios.get(`${BASE_URL}/activities`)
//       .then((response) => {
//         putContentResponse(response?.data);
//       })
//       .catch((err) => console.log(err));
//     Aos.init();
//   }, []);

//   return (
//     <Container className="Activity_Page">
//       <div className="total_activity_title">
//         <h2 className="logo_color">
//           About Us
//         </h2>
//         <div
//           className="underLine"
//         ></div>
//       </div>
//       <ul>
//         {contentResponse.activities?.L.map((activity, index) => (
//           <li key={index}>
//             <h2>{activity.M.title.S}</h2>
//             <ul>
//               {activity.M.details.L.map((detail, detailIndex) => (
//                 <li key={detailIndex}>{detail.S}</li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </Container>
//   );
// };