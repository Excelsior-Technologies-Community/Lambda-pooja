import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./faq.css";
import faqImage from "../assets/undraw_faq_re_31cw.svg";

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/faqs")
      .then((res) => {
  console.log("API Response:", res.data);
  console.log("Is Array:", Array.isArray(res.data));
  setFaqs(res.data);
})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      <div className="faq-container">
        <div className="faq-content">
          <p className="faq-subtitle">How can we help you?</p>

          <h1>Frequently Asked Questions</h1>

          <p className="faq-description">
            This is an example of a Moodle page resource. It can be used for
            static content pages. The Text editor allows the page to display
            many different kinds of content such as plain text, images, audio,
            video, embedded code or a combination of all these.
          </p>

          <div className="faq-image">
            <img src={faqImage} alt="FAQ" />
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.id}>
                <div
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  <span>{active === index ? "^" : "⌄"}</span>
                </div>

                {active === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Faq;