import React from "react";
import "./MissionSection.css";

const missionFeatures = [
  {
    icon: "⚡",
    title: "AI Blog Generation",
    description: "From topic to full article in under 30 seconds",
  },
  {
    icon: "🎯",
    title: "Personalised Digest",
    description: "Daily blog recommendations matched to your interests",
  },
  {
    icon: "🌐",
    title: "Community Platform",
    description: "Follow writers, engage with posts, grow your reach",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Track views, followers and engagement in real time",
  },
];

function MissionSection() {
  return (
    <section className="mission">
      {/* Left Content */}
      <div className="mission__content">
        <span className="mission__label">
          OUR MISSION
        </span>
        <h2 className="mission__title">
          Empowering creators
          <br />
          with AI that writes,
          <br />
          thinks, and inspires
        </h2>
        <p className="mission__paragraph">
          We started BlogCraft in 2024 with a single question: what if writing
          a great blog post took minutes instead of hours?
        </p>
        <p className="mission__paragraph">
          Today, we serve over 50,000 writers — from solo bloggers and indie
          creators to marketing teams at fast-growing startups.
        </p>
        <p className="mission__paragraph">
          We're a fully remote team spread across India, Singapore, and the UK.
        </p>
      </div>


      {/* Right Features */}
      <div className="mission__features">
        {missionFeatures.map((feature) => (
          <div
            className="mission__feature"
            key={feature.title}
          >
            <div className="mission__icon">
              {feature.icon}
            </div>
            <div className="mission__feature-content">
              <h3 className="mission__feature-title">
                {feature.title}
              </h3>
              <p className="mission__feature-description">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default MissionSection;