import React from 'react';
//import $ from 'jquery';
import {Container, Form, Row, Col, Button} from "react-bootstrap";
import {Footer} from '../components/components';

//
function Contact(){

    constructor(){
        super(props);
        this.state = {
          fname: '',
          lname: '',
          email: '',
          message: '',
          mailSent: false,
          error: null
        }
      }

      handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };


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
                            value={this.state.fname}
                            onChange={e => this.setState({ fname: e.target.value })}
                        />
                        </Form.Group>
                        <Form.Group className="last-name" as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            name="lname"
                            value={this.state.lname}
                            onChange={e => this.setState({ lname: e.target.value })}
                        />
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            required 
                            type="email" 
                            placeholder="Email" 
                            name="email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required placeholder="Street Address" name="address"/>
                    </Form.Group> */}
                    </Row>
                    <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea">
                        <Form.Label>How can we help you?</Form.Label>
                        <Form.Control 
                            required 
                            as="textarea" 
                            name="message" 
                            rows={3} 
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button 
                        className="bg-dark border-dark" 
                        type="submit" 
                        name="submit"
                        onClick={e => this.handleFormSubmit(e)} 
                        value="Submit"> Submit</Button>
                    <div>
                        {this.state.mailSent &&
                            <div>Thank you for contcting us.</div>
                        }        
                    </div>        
                    </Form>
            </Container>
        </section>
        

        <Footer />
        </>
    )
}

export default Contact;