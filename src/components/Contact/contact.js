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
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <Container>
                <Form id="contact-form" onSubmit={handleSubmit}>
                    <h1 className="contact-title">Contact me</h1>
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
                        <Form.Control as="textarea" name="message" defaultValue={message} rows="3" onBlur={handleChange} />
                    </Form.Group>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="button" type="submit">Submit</button>
                </Form>
            </Container>

            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form> */}
        </section>
    )
}

export default ContactForm;