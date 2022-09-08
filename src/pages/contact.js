import React from 'react';
//import $ from 'jquery';
import {Container, Form, Row, Col, Button} from "react-bootstrap";
import {Footer} from '../components/components';

//
function Contact(){


    return(
        <>
        <section className="contact-section">
            <Container className="contact-form bg-light mt-5 mb-5 p-5">
                <Container fluid>
                    <h1>Contact Us</h1>
                    <h3 className="mb-5">Please fill in your details below and submit your enquiry:</h3>
                </Container>


                <Form 
                    className="form-container" 
                    action="./php/formValidation.php"
                    method="post"
                    name="form"
                    noValidate
                >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name="fname"
                        />
                        </Form.Group>
                        <Form.Group className="last-name" as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            name="lname"
                        />
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Email" name="email"/>
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required placeholder="Street Address" name="address"/>
                    </Form.Group> */}
                    </Row>
                    <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea">
                        <Form.Label>How can we help you?</Form.Label>
                        <Form.Control required as="textarea" name="message" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button className="bg-dark border-dark" type="submit" name="submit">Submit</Button>
                    </Form>
            </Container>
        </section>
        

        <Footer />
        </>
    )
}

export default Contact;