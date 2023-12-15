import { useState, useEffect } from 'react';
import axios from 'axios';

export const MyComponent = () => {
  const [data, setData] = useState([]);
  const apiUrl = 'https://s01m8wo5t0.execute-api.us-west-1.amazonaws.com/deploy/home_content';

    

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        console.log('Data from API:', JSON.stringify(response.data, null, 2));
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      hey
    </div>
  );
  
}