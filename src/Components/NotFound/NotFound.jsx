import './notfound_style.css';
import notimg from './errror.svg';
import {Button} from 'react-bootstrap';


export const NotFound = () => {
 
    return (
      <>
        <div className="not-found_container">
            <div className="not-found_content">
                <h1 className="bounce">Whoops...</h1>
                <p>Sorry, the page you are looking for doesn't exist</p>
                <a href="/" style={{textDecoration:'none'}}><Button className="ErrorBtn" >Go to home page</Button></a>
                
            </div>
          
        </div>
          <div className='ErrorImage'><img src={notimg} alt="404 error "/></div>  
          <div className='ErrorLink'><a href="https://storyset.com/online" target='_blank'> Online illustrations by Storyset</a></div>
</>
    );
}
