import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Contact} from '../pages/pages';

function Hero(){
    return(
      <>
        <section className="container-overlay bg-light">
        <div className="hero">
          <div className="hero-container">
            <h1 className="hero-text">Dedicated to the pursuit of justice</h1>
            <h4 className="hero-text">Let our experience be your guide</h4>
            <Button as={Link} to="/contact" className="btn btn-light m-1">Get in touch</Button>
          </div>
        </div>
      
        <div id="overlay-div" className="container d-flex justify-content-around bg-light rounded">
          <div className="overlay-item m-2 text-center">
            <h2>2000+</h2>
            <h4>Solved cases</h4>
          </div>
          <div className="overlay-item m-2 text-center">
            <h2>1500+</h2>
            <h4>Happy clients</h4>
          </div>
          <div className="overlay-item m-2 text-center">
            <h2>94</h2>
            <h4>Attorneys</h4>
          </div>
          <div className="overlay-item m-2 text-center">
            <h2>24/7</h2>
            <h4>Availability and advice</h4>
          </div>
        </div>
      </section>

      <div>
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </div>
      </>
    )
}

export default Hero;