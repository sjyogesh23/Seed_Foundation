import seedlogo from './logo.png';
import './style.css';
import {Container, Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';

export const Navibar = () => {
    return(
        <div>
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

                            <Nav.Link href="/Initiative">Initiative</Nav.Link>

                            <NavDropdown title="Training" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Training/Videos">Videos</NavDropdown.Item>
                                <NavDropdown.Item href="/Training/Articals">Articals</NavDropdown.Item>
                                <NavDropdown.Item href="/Training/Podcast">Podcast</NavDropdown.Item>
                                <NavDropdown.Item href="/Training/Internship">Internship</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                        <Button className='bg-body-primary' href="/SignIn">Sign in</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        </div>        
    );
}