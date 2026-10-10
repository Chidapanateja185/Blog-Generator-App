import React from "react";
import "./CoreValues.css";

const coreValues = [
  {
    icon: "✍️",
    title: "Creator First",
    description:
      "Every decision starts with: does this make life better for the writer?",
  },
  {
    icon: "🔍",
    title: "Radical Transparency",
    description:
      "We tell you exactly how our AI works. No black boxes, no hidden agendas.",
  },
  {
    icon: "🚀",
    title: "Speed Without Compromise",
    description:
      "Fast doesn't mean sloppy. We obsess over quality of every AI output.",
  },
  {
    icon: "🌱",
    title: "Inclusive Growth",
    description:
      "BlogCraft is free to start. Powerful writing tools shouldn't be gatekept.",
  },
  {
    icon: "🔒",
    title: "Privacy by Design",
    description:
      "Your content is yours. We never train on your private drafts without consent.",
  },
  {
    icon: "🤝",
    title: "Community Over Competition",
    description:
      "We actively cultivate a community where every perspective is welcomed.",
  },
];

function CoreValues() {
  return (
    <section className="core-values">

      <div className="core-values__header">
        <h2 className="core-values__title">
          Our Core Values
        </h2>

        <p className="core-values__description">
          Everything we build at BlogCraft flows from these six principles.
        </p>
      </div>

      <div className="core-values__grid">
        {coreValues.map((value) => (
          <div
            className="core-values__card"
            key={value.title}
          >
            <div className="core-values__icon">
              {value.icon}
            </div>

            <h3 className="core-values__card-title">
              {value.title}
            </h3>

            <p className="core-values__card-description">
              {value.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default CoreValues;