import { useState } from "react";
import "./FAQ.css";
import { faqData } from "../../../data/BlogData";


function FAQ() {

    const [active, setActive] = useState(null);

    const toggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <section className="faq">

            <span className="faq__tag">
                FAQ
            </span>

            <h2 className="faq__title">
                Frequently Asked Questions
            </h2>

            <div className="faq__list">

                {faqData.map((item) => (

                    <div
                        key={item.id}
                        className={`faq__item ${
                            active === item.id ? "active" : ""
                        }`}
                    >

                        <button
                            className="faq__question"
                            onClick={() => toggle(item.id)}
                        >

                            <span>{item.question}</span>

                            <span className="faq__icon">
                                {active === item.id ? "−" : "+"}
                            </span>

                        </button>

                        {active === item.id && (
                            <div className="faq__answer">
                                {item.answer}
                            </div>
                        )}

                    </div>

                ))}

            </div>

        </section>
    );
}

export default FAQ;