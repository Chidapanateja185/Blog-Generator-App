import React from "react";
import "./TeamSection.css";

function TeamSection({
  label = "THE PEOPLE BEHIND BLOGCRAFT",
  title = "Meet the Team",
  description = "A small, passionate group of engineers, designers, and wordsmiths.",
  members = [],
}) {
  return (
    <section className="team-section">
      <div className="team-section__header">
        <span className="team-section__label">
          {label}
        </span>

        <h2 className="team-section__title">
          {title}
        </h2>

        <p className="team-section__description">
          {description}
        </p>
      </div>

      <div className="team-section__grid">
        {members.map((member) => (
          <div className="team-card" key={member.id}>
            <div
              className={`team-card__avatar team-card__avatar--${member.color}`}
            >
              {member.initials}
            </div>

            <h3 className="team-card__name">
              {member.name}
            </h3>

            <p className="team-card__role">
              {member.role}
            </p>

            <p className="team-card__bio">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;