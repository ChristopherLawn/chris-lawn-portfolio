import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import { Container, Form } from "react-bootstrap";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    return (
        <section>
            <Container>
                <Form id="contact-form" target="_blank" action="https://formsubmit.co/8dfa36473550abfc2499eaf5bcafa6eb" method="POST">
                    <h1 className="contact-title">Email</h1>
                    <a className="contact-input" href="mailto:christopher.d.lawn@gmail.com">christopher.d.lawn@gmail.com</a>
                    <br></br>
                    <br></br>
                    <h1 className="contact-title">Contact Me</h1>
                    <Form.Group controlId="form.Name">
                        <Form.Label className="contact-input" htmlFor="name">Name:</Form.Label>
                        <Form.Control type="text" defaultValue={name} name="name" onBlur={handleChange} placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Label className="contact-input" htmlFor="email">Email address:</Form.Label>
                        <Form.Control type="email" defaultValue={email} name="email" onBlur={handleChange} placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea">
                        <Form.Label className="contact-input" htmlFor="message">Message:</Form.Label>
                        <Form.Control type="text" defaultValue={message} name="message" className="contact-message" as="textarea" rows="3" onBlur={handleChange} placeholder="Please enter your comment, question, or request" />
                    </Form.Group>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="contact-button" type="submit">Submit</button>
                </Form>
            </Container>
        </section>
    )
}

export default ContactForm;