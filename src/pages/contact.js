import React from 'react';
//import axios from 'axios';
//import $ from 'jquery';
//import {Container, Form, Row, Col, Button} from "react-bootstrap";
import {Footer} from '../components/components';

class Contact extends React.Component{

    state = {
        fname: '',
        lname: '',
        email: '',
        message: '',
        emailStatus: ''
    }

    handleChange = input => e =>{
        this.setState({
            [input]: e.target.value
        });
    }

	// handleSubmit = (e) => {
	// 	const formData = new FormData();
	
	// 	axios({
	// 		url: 'http://localhost:3000/php/formValidation.php',
	// 		method: 'post',
	// 		data: formData,
	// 	})
	// 		.then((responseSubmit) => {
	// 			console.log('sending...', responseSubmit);
	// 			if (responseSubmit.data.response === 1) {
	// 				console.log('Sended');
	// 			} else {
	// 				console.log('NOT Sended');
	// 			}
	// 		})
	// 		.catch((errorSubmit) => {
	// 			console.log('error...', errorSubmit);
	// 		});

	// 	e.preventDefault();
	// 	console.log('sended!');
	// };
    
    
    
    render(){
        return(
            <>
            <section className="contact-section">
                <div className="contact-form bg-light mt-5 mb-5 p-5">
                    <div fluid>
                        <h1>Contact Us</h1>
                        <h3 className="mb-5">Please fill in your details below and submit your enquiry:</h3>
                    </div>

                    <form className="form-container" method="POST" onSubmit={this.handleSubmit}>
                        <div class="contact-name mb-3">
                            <div className="fname">
                                <label className="form-label">First Name</label>
                                <input type="text" class="form-control"  placeholder="First Name" value={this.state.fname} onChange={this.handleChange('fname')}/>
                            </div>
                            <div className="lname">
                                <label className="form-label">Last Name</label>
                                <input type="text" class="form-control" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange('lname')}/>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control" placeholder="Email Address" value={this.state.email} onChange={this.handleChange('email')}/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">How can we help you?</label>
                            <textarea class="form-control" rows="3" placeholder="Message" value={this.state.message} onChange={this.handleChange('message')}></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark" value="submit">Submit</button>
                    </form>
                </div>
            </section>
            

            <Footer />
            </>
        )
    }

}

export default Contact;