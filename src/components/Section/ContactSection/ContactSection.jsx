import React from 'react'
import ContactInfo from './ContactInfo';
import "./ContactSection.css";
import ContactForm from './ContactForm';
import FAQ from './FAQ';

function ContactSection() {
  return (
    <>
      <section className="contact-section">
        <div className="contact-section__container">
            <ContactInfo />
            <ContactForm />
        </div>
      </section>
      <FAQ />
    </>
    
  )
}

export default ContactSection;