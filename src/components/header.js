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

        // <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container">
        //         <a className="navbar-brand" href="index.js"><img className="img-fluid" src={logo} alt="logo"></img></a>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //             <NavDropdown title="About Us" id="nav-dropdown" className="bg-light m-2 border-0">
        //                 <NavDropdown.Item className="text-start mt-2 mb-3" eventKey="4.1">Vision and strategy</NavDropdown.Item>
        //                 <NavDropdown.Item className="text-start mt-3 mb-2" eventKey="4.2">Contact us</NavDropdown.Item>
        //             </NavDropdown>

        //                 {/* <li className="nav-item dropdown text-center m-2">
        //                     <a className="nav-link dropdown-toggle" 
        //                     href=" " 
        //                     id="navbarDropdownMenuLink" 
        //                     data-toggle="dropdown" 
        //                     aria-expanded="false">
        //                         About Us
        //                     </a>
        //                     <div className="dropdown-menu bg-light m-2 border-0" aria-labelledby="navbarDropdownMenuLink">
        //                         <a className="dropdown-item text-center mt-2 mb-3" href=" ">Vision and strategy</a>
        //                         <a className="dropdown-item text-center mt-3 mb-2" href=" ">Contact Us</a>
        //                     </div>
        //                 </li> */}
        //             </Nav>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Header;