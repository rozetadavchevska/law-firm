import React from "react"
import logo from './assets/logo.png';

function Header(){
    return(
        <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <div className="container">
                <a className="navbar-brand" href="index.html"><img className="img-fluid" src={logo} alt="logo"></img></a>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item m-2">
                        <a className="nav-link" href="/index.html">Home</a>
                        </li>
                        <li className="nav-item m-2">
                        <a className="nav-link" href="/pages/services.html">Services</a>
                        </li>
                        <li className="nav-item m-2">
                        <a className="nav-link" href="/index.html#sectors">Sectors</a>
                        </li>
                        <li className="nav-item dropdown text-center m-2">
                            <a className="nav-link dropdown-toggle" 
                            href=" " 
                            id="navbarDropdownMenuLink" 
                            data-toggle="dropdown" 
                            aria-expanded="false">
                                About Us
                            </a>
                            <div className="dropdown-menu bg-light m-2 border-0" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item text-center mt-2 mb-3" href="/pages/about.html">Vision and strategy</a>
                                <a className="dropdown-item text-center mt-3 mb-2" href="/index.html#contact">Contact Us</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;