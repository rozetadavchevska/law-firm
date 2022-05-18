import React from 'react';
import {Container} from "react-bootstrap";
import {Footer} from '../components/components';

function Vision(){
    return(
        <>
            <Container>
                <h1 className="mt-5 mb-5">Vision and Strategy</h1>
                <h3>Our vision is to be the global law firm of choice for the world's leading businesses of today and tomorrow.</h3>
                <h3>Our strategy recognises that the world we operate in is changing and that we too must be ready to change 
                    if we are to continue to lead and shape our sector</h3>
                
                <h3>The pursuit of the firm's vision and strategy is grounded in our most important commitment: to act as an ethical and responsible business.</h3>
            </Container>
            <Footer />
        </>
    )
}

export default Vision;
