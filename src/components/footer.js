import React from "react";
import logo from './assets/logo-light.svg';
import gmail from './assets/gmail.svg';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';

function Footer(){
    return(
        <footer id="footer" className="bg-dark">
            <div className="container pt-4 pb-4">
                <div className="row justify-content-around">
                    <div className="col-md-3">
                        <img className="footer-brand" src={logo} alt="logo"></img>
                    </div>
                    <div className="col-md text-light">
                        <p>Location: 11 Laughton Rd, Sheffield, S25 2PL</p>
                        <p>Phone number: 01909 567019</p>
                    </div>
                    <div className="col-md text-light">
                        <p>Check our social media presence</p>
                        <img className="socials" src={gmail} alt="gmail"></img>
                        <img className="socials" src={facebook} alt="facebook"></img>
                        <img className="socials" src={instagram} alt="instagram"></img>
                        <img className="socials" src={linkedin} alt="linkedin"></img>
                        <img className="socials" src={twitter} alt="twitter"></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;