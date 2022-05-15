import React from "react";
import {Navbar, Nav, Container, Image, Dropdown} from "react-bootstrap";
import logo from './assets/logo.svg';

function Header(){
    return(

        <Navbar bg="light" variant="light" expand="lg">
        <Container>
            <Navbar.Brand href="index.js"><Image fluid src={logo}></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" bg="light"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Container fluid>
                <Nav className="justify-content-end">
                    <Nav.Link className="m-2" href="index.js">Home</Nav.Link>
                    <Nav.Link className="m-2" href="/index.js#sectors">Sectors</Nav.Link>
                    <Nav.Link className="m-2" href="/src/pages/services.js">Services</Nav.Link>
                    <Dropdown className="text-center border-0" id="dropdown">
                        <Dropdown.Toggle bg="light" variant="light" id="dropdown-basic" className="m-2 justify-content-center">
                            About Us
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-light text-start m-2 border-0">
                            <Dropdown.Item className="mt-2 mb-3" href="src/pages/vision.js">Vision and Strategy</Dropdown.Item>
                            <Dropdown.Item className="mt-3 mb-2" href="/index.js#contact">Contact Us</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </Nav>
            </Container>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Header;