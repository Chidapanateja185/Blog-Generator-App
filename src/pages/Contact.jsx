import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import ContactSection from '../components/Section/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'

function Contact() {
  return (
    <>
      <Header />
      <Hero
            variant="contact"
            btn="Get In Touch"
            title="We'd love to hear from you"
            description={
              <>
                Have a question, a feature idea, or just want to say hello? Our team <br/>
                typically responds within 24 hours.
              </>
            }
        />
      <main>
        <ContactSection />
      </main>

      <Footer />

    </>
  )
}

export default Contact
