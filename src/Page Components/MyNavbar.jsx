import React from 'react';
import { Container, Row, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <>
            <Container>
                <Row className='my-4'>
                    <Navbar expand="lg" className="bg-body-tertiary rounded-pill px-4 py-2">
                        <Navbar.Brand href="#home">My App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Link to='/' className='text-decoration-none'><Nav.Link href="#home">Home</Nav.Link></Link>
                                <Link to='/link'><Nav.Link href="#link">Link</Nav.Link></Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <div className="Navbar-button d-flex gap-2">
                                <Link to='/register'><Button variant="primary">Register</Button></Link>
                                <Link to='/login'><Button variant="success">Log In</Button></Link>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </>
    )
}

export default MyNavbar;
