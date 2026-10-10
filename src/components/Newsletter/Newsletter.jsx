import React from 'react'
import { useState } from 'react';
import "./Newsletter.css"

const TOPICS = ["Technology", "Health & Wellness", "Finance", "Travel", "Food", "Science", "Lifestyle", "Business"];

function Newsletter() {

    const[form, setForm] = useState({
        name: "",
        email: "",
        topic: ""
    })

    const[submitted, setSubmitted] = useState(false);
    const[errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        if (!form.name.trim()) {
            errors.name = "Please enter your name.";
        }

        if(!form.email.trim()){
            errors.email = "Please enter your Email";
        }

        if(!form.topic){
            errors.topic = "Please select the topic";
        }
        return errors;
    }

    const handleSubmit = () => {
        const validateErrors = validate();

        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors);
            return;
        }

        setErrors({});
        setSubmitted(true);
    }

    return (
        <section className="newsletter">
            <div className="newsletter__inner">

                {/* Left Section */}
                <div className="newsletter__content">

                <span className="newsletter__badge">
                    Daily AI Blog Digest
                </span>

                <h2 className="newsletter__heading">
                    Get fresh blogs on your favourite topics, every day.
                </h2>

                <p className="newsletter__desc">
                    Pick a topic you love and our AI will generate, curate, and
                    deliver handpicked blog posts straight to your inbox — every
                    single day, for free.
                </p>

                {[
                    "AI-generated daily summaries",
                    "Personalised to your topic",
                    "Unsubscribe anytime",
                ].map((text) => (
                    <div
                    key={text}
                    className="newsletter__feature"
                    >
                    <span className="newsletter__feature-icon">
                        ✦
                    </span>

                    <span className="newsletter__feature-text">
                        {text}
                    </span>
                    </div>
                ))}

                </div>

                {/* Right Form Section */}
                <div className="newsletter__form-card">

                {submitted ? (
                    <div className="newsletter__success">

                    <div className="newsletter__success-icon">
                        🎉
                    </div>

                    <h3 className="newsletter__success-title">
                        You're subscribed!
                    </h3>

                    <p className="newsletter__success-text">
                        Daily{" "}
                        <strong>
                        {form.topic}
                        </strong>{" "}
                        blogs will land in{" "}
                        <strong>
                        {form.email}
                        </strong>{" "}
                        starting tomorrow. 🚀
                    </p>

                    </div>
                ) : (
                    <>
                    <h3 className="newsletter__form-title">
                        Subscribe for Daily Blogs
                    </h3>

                    <p className="newsletter__form-subtitle">
                        Choose your topic and get notified every day.
                    </p>

                    {/* Name */}
                    <div className="newsletter__field">

                        <label className="newsletter__label">Your Name</label>

                        <input
                            type="text"
                            placeholder="e.g. Vishwanath"
                            value={form.name}
                            onChange={(e) =>
                                setForm({
                                ...form,
                                name: e.target.value,
                                })
                            }
                            className={
                                errors.name
                                ? "newsletter__input newsletter__input--error"
                                : "newsletter__input"
                            }
                        />
                        {errors.name && (
                            <p className="newsletter__error">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="newsletter__field">

                        <label className="newsletter__label">Email Address</label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={(e) =>
                                setForm({
                                ...form,
                                email: e.target.value,
                                })
                            }
                            className={
                                errors.email
                                ? "newsletter__input newsletter__input--error"
                                : "newsletter__input"
                            }
                        />

                        {errors.email && (
                            <p className="newsletter__error">
                                {errors.email}
                            </p>
                        )}

                    </div>

                    {/* Topics */}
                    <div className="newsletter__field">

                        <label className="newsletter__label">Choose Your Blog Topic</label>

                        <div className="newsletter__topics">

                        {TOPICS.map((topic) => (
                            <button
                                key={topic}
                                type="button"
                                className={`topic-pill ${
                                    form.topic === topic
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() =>
                                    setForm({
                                    ...form,
                                    topic: topic,
                                    })
                                }
                            >
                                {topic}
                            </button>
                        ))}

                        </div>
                        {errors.topic && (
                            <p className="newsletter__error">
                                {errors.topic}
                            </p>
                        )}

                    </div>

                    {/* Submit */}
                    <button
                        className="newsletter__submit"
                        onClick={handleSubmit}
                    >
                        Subscribe & Get Daily Blogs
                    </button>

                    <p className="newsletter__no-spam">
                        No spam. Unsubscribe anytime.
                    </p>

                    </>
                )}

                </div>
            </div>
        </section>
  );
}

export default Newsletter;