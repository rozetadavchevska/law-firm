import React from "react";
import {Navbar, Nav, Container, Image, Dropdown} from "react-bootstrap";
import Logo from '../assets/logo.svg';
import {Route, Routes, Link} from 'react-router-dom';
import {Home, Services, Contact, Vision} from "../pages/pages";


function Header(){
    return(
        <>
            <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home"><Image fluid src={Logo}></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" bg="light"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Container fluid>
                    <Nav className="justify-content-end">
                    
                        <Nav.Link className="m-2" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="m-2" href="#sectors">Sectors</Nav.Link>
                        <Nav.Link as={Link} to="/services" className="m-2">Services</Nav.Link>
                        <Dropdown className="text-center border-0" id="dropdown">
                            <Dropdown.Toggle bg="light" variant="light" id="dropdown-basic" className="m-2 justify-content-center">
                                About Us
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="bg-light text-start m-2 border-0">
                                <Dropdown.Item as={Link} to="/vision" className="mt-2 mb-3">Vision and Strategy</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/contact" className="mt-3 mb-2">Contact Us</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        
        <div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/vision" element={<Vision />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>

        </>
    )
}

export default Header;