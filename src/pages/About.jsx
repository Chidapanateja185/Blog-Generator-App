import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import CoreValues from '../components/Section/CoreValues/CoreValues'
import MissionSection from '../components/Section/MissionSection/MissionSection'
import TeamSection from '../components/Section/TeamSection/TeamSection'
import { teamMembers } from '../data/BlogData'
import Footer from "../components/Footer/Footer"

function About() {
  return (
    <>
      <Header />
      <Hero
            variant="about"
            btn="OUR STORY"
            title={
                <>
                We're building the future
                <br />
                of <span className="hero__highlight">AI-powered</span> blogging
                </>
            }
            description="BlogCraft was born from a simple belief: everyone has something worth saying. We built the tools to help you say it beautifully, effortlessly, and to the right audience."
        />
        <MissionSection />
        <CoreValues />
        <TeamSection members={teamMembers} />
        <Footer showGetInTouch={true} />
    </>
  )
}

export default About
