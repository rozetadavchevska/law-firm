import React, {useState} from 'react';
import {Container, Form, Row, Col, Button} from "react-bootstrap";
import {Footer} from '../components/components';


function Contact(){

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return(
        <>
        <section className="contact-section">
            <Container className="contact-form bg-light mt-5 mb-5 p-5">
                <Container fluid>
                    <h1>Contact Us</h1>
                    <h3 className="mb-5">Please fill in your details below and submit your enquiry:</h3>
                </Container>


                <Form className="form-container" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                        />
                        </Form.Group>
                        <Form.Group className="last-name" as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                        />
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required placeholder="Street Address" />
                    </Form.Group>
                    </Row>
                    <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea">
                        <Form.Label>How can we help you?</Form.Label>
                        <Form.Control required as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button className="bg-dark border-dark" type="submit">Submit</Button>
                    </Form>
            </Container>
        </section>
        

        <Footer />
        </>
    )
}

export default Contact;
