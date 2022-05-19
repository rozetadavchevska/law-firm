import React from 'react';
import {Container} from "react-bootstrap";
import {Footer} from '../components/components';
import Office1 from '../assets/office1.jpg';
import Office2 from '../assets/office2.jpg';
import Office3 from '../assets/office3.jpg';

function Vision(){
    return(
        <>
            <Container>
                <h1 className="mt-5 mb-5">Vision and Strategy</h1>
                <h3>The pursuit of the firm's vision and strategy is grounded in our most important commitment: to act as an ethical and responsible business.</h3>
            </Container>

            <Container className="office-cont mt-5 mb-5">
                <div className="office-img1-cont">
                    <img className="img-fluid" src={Office1} alt="office-img"></img>
                </div>
                <Container className="office-text1-cont p-5">
                    <h4>Our vision is to be the global law firm of choice for the world's leading businesses of today and tomorrow.
                        <br/>
                        <br/>
                        Our strategy recognises that the world we operate in is changing and that we too must be ready to change 
                        if we are to continue to lead and shape our sector.</h4>
                </Container>
            </Container>
            
            <Container className="office-cont mt-5 mb-5">
                <Container className="office-text2-cont p-5">
                    <h4>We always strive to exceed the expectations of our clients, which include corporates from all the commercial and industrial sectors, 
                        the financial investor community, governments, regulators, trade bodies and not-for-profit organisations. 
                        <br/>
                        <br/>
                        We provide them with the highest-quality 
                        advice and legal insight, which combines the Firm's global standards with in-depth local expertise.</h4>
                </Container>
                <div className="office-img2-cont img-fluid">
                    <img className="img-fluid" src={Office2} alt="office-img"></img>
                </div>
            </Container>

            <Container className="office-cont mt-5 mb-5">
                <div className="office-img3-cont">
                    <img className="img-fluid" src={Office3} alt="office-img"></img>
                </div>
                <Container className="office-text3-cont p-5">
                    <h4>The core principles of our culture are set out in our values-based Code of Conduct which defines our expectations of everyone working 
                        in our firm, and acts as a guide for our behaviour with each other, our clients, and all our external stakeholders.</h4>
    
                    <h5>Our Code of Conduct is an expression of what it looks like to live our values:</h5>
                        <ul>
                            <li className="conduct">Act with integrity and play by the rules</li>
                            <li className="conduct">Be inclusive and respectful and do not discriminate, bully, harass or victimise others</li>
                            <li className="conduct">Embrace challenge, be open to change and together strive for excellence</li>
                            <li className="conduct">Speak up and call out unacceptable conduct</li>
                            <li className="conduct">Act responsibly and actively contribute to beneficially serve the wider communities</li>
                        </ul>
                </Container>
            </Container>

            <Footer />
        </>
    )
}

export default Vision;