import seedlogo from './logo.png';
import './navibar_style.css';
import {Container, Navbar, Nav, Button} from 'react-bootstrap';

export const Navibar = (props) => {
    const userAuth= props.useAuth;
    let button_Name= 'Sign In';
    let button_Path= '/SignIn';
    if (userAuth){
        button_Name='Profile';
        button_Path='/Profile';
    }
    return(
        <div className="total_navibar">
            <Navbar expand="lg" className="bg-body-primary">
                <Container>
                    <Navbar.Brand href="/">
                        <div className="logo_div">
                            <img src={seedlogo} alt =''/>
                            <span className="logo_title">Seed Foundation <br/><span className='pec'>of PEC</span></span>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/AboutUs">About us</Nav.Link>                            
                            <Nav.Link href="/Activity">Activities</Nav.Link>                            
                            <Nav.Link href="/Team">Team</Nav.Link>
                            <Nav.Link href="/Initiative">Initiative</Nav.Link>                            
                            <Nav.Link href="/Contact">Contact Us</Nav.Link>
                        </Nav>
                        
                        <Button href={button_Path} style={{ width:'100px'}}>{button_Name}</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        </div>        
    );
}