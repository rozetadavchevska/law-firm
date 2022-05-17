import React from 'react';

function Sectors(){
    return(
        <section id="sectors" className="sectors-section container justify-content-center mb-5">
            <h1>Sectors</h1>
            <p>Understanding our clients' business enviroment and strategic aims is key to providing 
                them with first class legal services. Our lawyers specialise in industry sectors as well 
                as practice areas for maximum effectiveness.</p>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div id="col" className="col-md">
                        Healthcare, Life Sciences and Chemicals
                    </div>
                    <div id="col" className="col-md">
                        Consumer Goods, Food and Retail
                    </div>
                    <div id="col" className="col-md">
                        Energy and Natural Resources
                    </div>
                </div>
                <div className="row">
                    <div id="col" className="col-md">
                        Banks
                    </div>
                    <div id="col" className="col-md">
                        Funds and Investment Management
                    </div>
                    <div id="col" className="col-md">
                        Industrials
                    </div>
                </div>
                <div className="row">
                    <div id="col" className="col-md">
                        Private Equity
                    </div>
                    <div id="col" className="col-md">
                        Real Estate 
                    </div>
                    <div id="col" className="col-md">
                        Insurance
                    </div>
                </div>
                <div className="row">
                    <div id="col" className="col-md">
                        Transport and Logistics
                    </div>
                    <div id="col" className="col-md">
                        Media, Sport and Entertainment 
                    </div>
                    <div id="col" className="col-md">
                        Telecommunications and Technology
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sectors;