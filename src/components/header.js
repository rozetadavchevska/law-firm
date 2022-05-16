import React from "react";
import {Navbar, Nav, Container, Image, Dropdown} from "react-bootstrap";
import  DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import logo from './assets/logo.svg';
import DropdownToggle  from "react-bootstrap/DropdownToggle";
//import {Link} from 'react-router-dom';
//import {  Vision} from "../pages/pages";

function Header(){
    return(
        
            <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="index.js"><Image fluid src={logo}></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" bg="light"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Container fluid>
                    <Nav className="justify-content-end">
                    
                        <Nav.Link className="m-2" href=".../index.js">Home</Nav.Link>
                        <Nav.Link className="m-2" href="#sectors">Sectors</Nav.Link>
                        <Nav.Link className="m-2">Services</Nav.Link>
                        <Dropdown className="text-center border-0" id="dropdown">
                            <DropdownToggle bg="light" variant="light" id="dropdown-basic" className="m-2 justify-content-center">
                                About Us
                            </DropdownToggle>

                            <DropdownMenu className="bg-light text-start m-2 border-0">
                                <DropdownItem className="mt-2 mb-3">Vision and Strategy</DropdownItem>
                                <DropdownItem className="mt-3 mb-2">Contact Us</DropdownItem>
                            </DropdownMenu>
                        </Dropdown> 

                        
                        
                          
                    </Nav>
                </Container>
                </Navbar.Collapse>
            </Container>
            </Navbar>
     
     
    )
}

export default Header;