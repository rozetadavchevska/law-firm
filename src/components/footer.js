import React from "react";
import Logo from '../assets/logo-light.svg';
import Gmail from '../assets/gmail.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';

function Footer(){
    return(
        <footer id="footer" className="bg-dark">
            <div className="container pt-4">
                <div className="row justify-content-around pb-4">
                    <div className="col-md-3">
                        <img className="footer-brand" src={Logo} alt="logo"></img>
                    </div>
                    <div className="col-md text-light">
                        <p>Location: 58 Park St, London SE1 9ED, UK</p>
                        <p>Phone number: +44 20 7946 0056</p>
                    </div>
                    <div className="col-md text-light">
                        <p>Check our social media presence</p>
                        <a href=" "><img className="socials" src={Gmail} alt="gmail"></img></a>
                        <a href="https://www.facebook.com/"><img className="socials" src={Facebook} alt="facebook"></img></a>
                        <a href="https://www.instagram.com/"><img className="socials" src={Instagram} alt="instagram"></img></a>
                        <a href="https://www.linkedin.com/"><img className="socials" src={Linkedin} alt="linkedin"></img></a>
                        <a href="https://twitter.com/"><img className="socials" src={Twitter} alt="twitter"></img></a>
                    </div>
                </div>
                <div>
                    <p className="footer-copyright mt-4 mb-0 pb-2 text-muted">Copyright &copy; Rozeta Davchevska</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;