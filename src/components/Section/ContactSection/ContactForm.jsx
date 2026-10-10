import React from 'react'
import './ContactForm.css'
import { useState } from 'react';


function ContactForm() {

    const[subject, setSubject] = useState("General Enquiry");

    const subjects = [
        "General Enquiry",
        "Technical Support",
        "Partnership",
        "Feedback",
        "Others",
    ];

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <div className="contact-form">
            <div className="contact-form__header">
                <h2>Send us a message</h2>
                <p>We'll get back to you within 24 hours</p>
            </div>
            <form onSubmit={handlesubmit}>
                <div className="contact-form__row">
                    <div className="contact-form__feild">
                        <label>FIRST NAME*</label>
                        <input 
                            type='text'
                            placeholder='John'
                            required
                        />
                    </div>

                    <div className="contact-form__feild">
                        <label>Last NAME*</label>
                        <input 
                            type='text'
                            placeholder='Doe'
                            required
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="contact-form__feild">
                    <label>EMAIL ADDRESS*</label>
                    <input
                        type='email'
                        placeholder='you@example.com'
                        required
                    />
                </div>

                {/* Subject */}
                <div className="contact-form__feild">
                    <label>SUBJECT</label>
                    <div className="contact-form__subjects">

                    {subjects.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={
                            subject === item
                                ? "contact-form__subject active"
                                : "contact-form__subject"
                            }
                            onClick={() => setSubject(item)}
                        >
                            {item}
                        </button>
                    ))}

                </div>

                {/* Message */}
                <div className="contact-form__feild">
                    <label>MESSAGE*</label>
                    <textarea
                        placeholder="Tell us how we can help you..."
                        rows="4"
                        required
                    />
                </div>

                {/* Submit */}
                <button
                    type='submit'
                    className='contact-form__submit'
                >
                    Send Message →
                </button>

                </div>
            </form>
        </div>
    )
}

export default ContactForm
