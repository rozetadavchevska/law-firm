import React from 'react';

function Hero(){
    return(
        <section className="container-overlay bg-light">
        <div className="hero">
          <div className="hero-container">
            <h1 className="hero-text">Dedicated to the pursuit of justice</h1>
            <h4 className="hero-text">Let our experience be your guide</h4>
            <a href=" "><button className="btn btn-light m-1">Get in touch</button></a>
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
    )
}

export default Hero;