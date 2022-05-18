import React from 'react';
import {Container, Card, CardGroup} from "react-bootstrap";
import {Footer, Divider} from '../components/components';
import RealEstate from '../assets/realestate.jpg';
import Finance from '../assets/finance.png';
import Dispute from '../assets/dispute-res.jpg';
import Boardroom from '../assets/boardroom.png';
import Corporate from '../assets/corporate.jpg';
import Technology from '../assets/technology.jpg';
import Tax from '../assets/tax.png';
import Capital from '../assets/capital.png';
import ESG from '../assets/esg.jpg';

function Services(){

    return(
        <>
            <Container className=" mt-5 mb-5">
                <h1 className="mb-4">Services</h1>
                <h3 className="">We are committed to supporting our clients in those areas where their partnership with us can bring real value</h3>

                <CardGroup className="card-group"> 
                    <Card className="card-container">
                        <Card.Img className="card-image" src={RealEstate} />
                        <Card.Body>
                        <Card.Title className="card-title">Real Estate</Card.Title>
                        <Divider />
                        <Card.Text>
                            Acting for the real estate industry's leading players, 
                            we advise on the full range of real estate-related transactions.
                        </Card.Text> 
                        </Card.Body>
                    </Card>
                    <Card className="card-container">
                        <Card.Img className="card-image" src={Finance} />
                        <Card.Body>
                        <Card.Title className="card-title">Finance</Card.Title>
                        <Divider />
                        <Card.Text>
                            We act on many of the financial markets' ground-breaking deals and have become trusted advisers to the 
                            corporations and financial institutions that define the global markets.
                        </Card.Text>
                        </Card.Body>
                    </Card> 
                    <Card className="card-container">
                        <Card.Img className="card-image" src={Dispute} />
                        <Card.Body>
                        <Card.Title className="card-title">Litigation and Dispute Resolution</Card.Title>
                        <Divider />
                        <Card.Text>
                            We are uniquely positioned to advise on these issues and represent multinational clients in 
                            cross-border litigation, international arbitration and investigations.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup> 

                    <CardGroup className="card-group">
                    <Card className="card-container">
                        <Card.Img className="card-image" src={Boardroom} />
                        <Card.Body>
                        <Card.Title className="card-title">Boardroom Risk and Reputation</Card.Title>
                        <Divider />
                        <Card.Text>
                            We can help businesses feel more confident in their ability to manage their reputation through 
                            advice and insights into good corporate culture, effective corporate risk and crisis management, 
                            and a sound understanding of the political, regulatory and legal environment.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card-container">
                        <Card.Img className="card-image" src={Corporate} />
                        <Card.Body>
                        <Card.Title className="card-title">Corporate</Card.Title>
                        <Divider />
                        <Card.Text>
                            What makes us one of the most respected international practices is our client base, the mandates we win, our industry expertise, 
                            as well as our reputation for creating value for clients and investing in relationships.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card-container">
                        <Card.Img className="card-image" src={Technology} />
                        <Card.Body>
                        <Card.Title className="card-title">Technology</Card.Title>
                        <Divider />
                        <Card.Text>
                        we recognise that rapid advances in technology such as artificial intelligence, blockchain, cyber security 
                        are significantly impacting our clients' business models, their growth strategies bringing opportunities 
                        to be harnessed and risks to be navigated.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>

                    <CardGroup className="card-group">
                    <Card className="card-container">
                        <Card.Img className="card-image" src={Tax} />
                        <Card.Body>
                        <Card.Title className="card-title">Tax, Pensions, Employment and Incentives</Card.Title>
                        <Divider />
                        <Card.Text>
                            Truly global practices featuring first-class contentious capability ensure that our Tax, Employment, 
                            Incentives and Pensions groups are market leaders in their respective disciplines.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card-container">
                        <Card.Img className="card-image" src={Capital} />
                        <Card.Body>
                        <Card.Title className="card-title">Capital Markets</Card.Title>
                        <Divider />
                        <Card.Text>
                            Our lawyers cover the whole spectrum of capital markets work including debt and equity transactions, 
                            structured debt, high yield and trust. Alongside mainstream capital markets issuances in the major 
                            economies we work on benchmarking and other innovative transactions
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card-container"> 
                        <Card.Img className="card-image" src={ESG} />
                        <Card.Body>
                        <Card.Title className="card-title">Environmental, Social and Governance (ESG)</Card.Title>
                        <Divider />
                        <Card.Text>
                            ESG factors have fast risen to the top of the board agenda with companies increasingly aware that a failure to address these matters can be 
                            detrimental to their businesses, both financially and reputationally.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
            </Container>
            <Footer />
        </>
    )
}

export default Services;