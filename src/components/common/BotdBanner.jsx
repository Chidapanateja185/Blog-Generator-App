import React from 'react'
import { useEffect, useState } from 'react';
import "./BotdBanner.css";


function getTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set to midnight of the next day
    const diffMs = midnight.getTime() - now.getTime();
    const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

function BotdBanner({
  blog = {
    title: "10 AI Tools Every Developer Should Try in 2026",
    author: "Sarah Chen",
    category: "Technology",
    excerpt:
      "A curated look at the AI-powered tools reshaping how developers write, debug, and ship code.",
  },
  onView,
}) {

    const [timeLeft, setTimeLeft] = React.useState(getTimeUntilMidnight());
    
    useEffect(() => {

        const timer = setInterval(() => {
            setTimeLeft(getTimeUntilMidnight());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="botdBanner">
            <div className="botdContent">
                <span className="botdBadge">🔥 Blog of the Day</span>
                <h2 className="botdTitle">{blog.title}</h2>
                <div className="botdMeta">
                    <span>{blog.author}</span>
                    <span className="botdMetaDot" />
                    <span>{blog.category}</span>
                </div>
                <p className="botdSubtitle">{blog.excerpt}</p>
                <button type="button" className="botdCta" onClick={onView}>
                    Read Now →
                </button>
            </div>
            <div className="botdCountdown">
                <span className="botdCountdownLabel">Next Blog of the Day in:</span>
                <div className="botdTimer">
                    <div className="botdTimeBox">
                        <span className="botdTimeValue">{pad(timeLeft.hours)}</span>
                        <span className="botdTimeUnit">Hrs</span>
                    </div>
                    <span className="botdTimeSep">:</span>
                    <div className="botdTimeBox">
                        <span className="botdTimeValue">{pad(timeLeft.minutes)}</span>
                        <span className="botdTimeUnit">Min</span>
                    </div>
                    <span className="botdTimeSep">:</span>
                    <div className="botdTimeBox">
                        <span className="botdTimeValue">{pad(timeLeft.seconds)}</span>
                        <span className="botdTimeUnit">Sec</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BotdBanner
