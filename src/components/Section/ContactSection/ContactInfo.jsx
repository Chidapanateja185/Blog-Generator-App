import React from 'react'
import "./ContactInfo.css";


function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info__socials">
        <a href="#" className="contact-info__social">f</a>
        <a href="#" className="contact-info__social">𝕏</a>
        <a href="#" className="contact-info__social">◎</a>
      </div>
       <span className="contact-info__label">
        CONNECT WITH US
      </span>

      <h1 className="contact-info__title">
        Preparing For Your<br/>
        Success, <br/>
        We Help You Write and
        Grow.
      </h1>

       <p className="contact-info__description">
        From your first blog post to your thousandth reader,
        our team is here for you. Reach out with questions,
        feedback, or partnership ideas — we read every
        message and reply within 24 hours.
       </p>

        {/* Divider */}
      <div className="contact-info__divider"></div>

      {/* Contact Details */}
      <div className="contact-info__details">
        <div className="contact-info__item">
            <div className="contact-info__icon">✉</div>
            <div>
                <span>EMAIL US AT</span>
                <strong>support@blogcraft.ai</strong>
            </div>
        </div>

        <div className="contact-info__item">
            <div className="contact-info__icon">☎</div>
            <div>
                <span>CALL US AT</span>
                <strong>+1 (234) 567-8910</strong>
            </div>
        </div>

      </div>

    </div>
  )
}

export default ContactInfo;
