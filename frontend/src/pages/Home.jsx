import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { FiInfo } from "react-icons/fi";
import {
  FiSettings,
  FiMonitor,
  FiUsers,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiAward,
  FiStar,
  FiSend,
} from "react-icons/fi";

import "./Home.css";

const iconMap = {
  "lnr-cog": <FiSettings />,
  "lnr-laptop-phone": <FiMonitor />,
  "lnr-users": <FiUsers />,
  "lnr-checkmark-circle": <FiCheckCircle />,
};

function Home() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [sections, setSections] = useState([]);
  const [features, setFeatures] = useState([]);
  const [courses, setCourses] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [announcements, setAnnouncements] =useState([]);

const whyChooseData = [
  {
    title: "Reliable and stable",
    content:
      "Daily approved and trusted by over 10,000 satisfied customers, Theme Lambda stands tall, celebrating nine years as the unparalleled #1 selling Moodle theme. Renowned for its reliability and robustness, Lambda emerges as the consistent choice, elevating the experience of your Moodle instance with its time-tested excellence.",
  },
  {
    title: "Excellent support",
    content:
      "Theme Lambda not only offers a helpful and robust customer support system, ensuring your queries are promptly addressed, but also guarantees a lifetime of free updates. Experience peace of mind knowing that your Moodle instance stays up-to-date with the latest advancements, supported by a dedicated team committed to your success.",
  },
  {
    title: "Full documentation",
    content:
      "Comprehensive installation guides and tutorials accompany each component and plugin included with Theme Lambda, streamlining your workflow. These detailed instructions provide step-by-step guidance, simplifying the setup process and ensuring a seamless integration of all elements, empowering you to maximize the full potential of your Moodle platform effortlessly.",
  },
];

const fetchCourses = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/courses"
    );

    setCourses(res.data);
  } catch (err) {
    console.log(err);
  }
};


 // announcement 


const fetchAnnouncements = async () => {
  try {

    const res = await axios.get(
      "http://localhost:5000/api/announcements"
    );

    setAnnouncements(res.data);

  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    fetchSlides();
    fetchSections();
    fetchFeatures();
    fetchCourses();
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [slides]);

  // Slider API
  const fetchSlides = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/sliders"
      );
      setSlides(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Learning Section API
  const fetchSections = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/sections"
      );

      setSections(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Features API
  const fetchFeatures = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/features"
      );

      setFeatures(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Slider Buttons
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  if (slides.length === 0) {
    return <h2>Loading...</h2>;
  }

 

  return (
    <>
      {/* Slider Section */}
      <div className="slider-container">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="slider-image"
        />

        <div className="overlay">
          <h1>{slides[current].title}</h1>
          <p>{slides[current].description}</p>
          <button>
            {slides[current].button_text}
          </button>
        </div>

        <button
          className="prev-btn"
          onClick={prevSlide}
        >
          ❮
        </button>

        <button
          className="next-btn"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>

      {/* Learning + Features Section */}
<div className="learning-section">

  <h2>
    Self-Paced Learning Courses Online
  </h2>

  <h1>
    with Lambda - Premium Moodle Theme
  </h1>

  <div className="cards">
    {sections.map((item) => (
      <div className="card" key={item.id}>
        <img
          src={item.image}
          alt={item.title}
        />

        <h3>{item.title}</h3>

        <p>{item.description}</p>
      </div>
    ))}
  </div>

  {/* Features Section Start */}
    <div className="feature-section">

      <h2>Our Features</h2>

      <div className="divider"></div>

      <p className="feature-subtitle">
        Lambda is a high quality and very flexible
        theme with lots of powerful features and
        theme options.
        <br />
        It lets you present your content in whatever
        way you like.
      </p>

      <div className="feature-grid">

        {features.map((item) => (

          <div
            className="feature-card"
            key={item.id}
          >

            <div className="feature-icon">
              {iconMap[item.icon]}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a href={item.more_link}>
              More...
            </a>

          </div>

        ))}

      </div>

  </div>
  {/* Features Section End */}

  {/* Why Choose Us Section */}

    <div className="why-choose-section">

      <div className="why-left">

        <span className="why-small-title">
          Why choose us?
        </span>

        <h2>
          A few reasons why our valued
          customers choose Lambda for Moodle.
        </h2>

        <div className="accordion">

          {whyChooseData.map((item, index) => (

            <div
              className="accordion-item"
              key={index}
            >

              <div
                className="accordion-header"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
              >
                <span>{item.title}</span>

              <span className="accordion-arrow">
                {openIndex === index ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </span>
              </div>

              {openIndex === index && (
                <div className="accordion-content">
                  {item.content}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

      <div className="why-right">

        <img
          src="https://lambda-demo-01.redpithemes.com/pluginfile.php/148/mod_label/intro/fp-why-choose.jpg"
          alt="Why Choose Us"
        />

      </div>

</div>

      <div className="benefits-section">

        <div className="benefit-card">
          <div className="benefit-icon">
            <FiAward />
          </div>

          <div className="benefit-content">
            <h3>Plugins Ready</h3>
            <p>
              Compatible with plugins from the Moodle plugins directory.
            </p>
          </div>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">
            <FiStar />
          </div>

          <div className="benefit-content">
            <h3>Best Rated</h3>
            <p>
              The most popular theme for Moodle with 5-star rating.
            </p>
          </div>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">
            <FiSend />
          </div>

          <div className="benefit-content">
            <h3>Lifetime Updates</h3>
            <p>
              Lambda is regularly updated and all updates are free.
            </p>
          </div>
        </div>

      </div>  

      {/* Available Courses */}

    <div className="courses-section">

      <h2>Available Courses</h2>

      <div className="yellow-line"></div>

      {courses.map((course) => (

        <div
          className="course-item"
          key={course.id}
        >

          <img
            src={course.image}
            alt={course.title}
          />

          <div className="course-content">

            <h3>{course.title}</h3>

            <span>
              {course.category}
            </span>

            <p>
              {course.description}
            </p>

            <a
              href={course.course_link}
              className="course-btn"
            >
              {course.button_text}
            </a>

          </div>

        </div>

      ))}

      <div className="paging">
        <button className="all-course-btn">
          All Courses
        </button>
      </div>

    </div>

 {/* Announcement Section */}
    <div className="announcement-section">

      <h2>Site announcements</h2>

      <div className="yellow-line"></div>

      <div className="announcement-grid">

        {announcements.map((item) => (

          <div
            className="announcement-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <h4>{item.title}</h4>

           <div className="announcement-meta">
              <FiInfo className="meta-icon" />

              <span className="by-text">by</span>

              <span className="author-name">
                {item.author}
              </span>

              <span className="post-date">
                - {item.post_date}
              </span>
            </div>

            <hr />

            <h3>{item.heading}</h3>

            <p>{item.description}</p>

            <button>
              {item.button_text}
            </button>

          </div>

        ))}

      </div>

    </div>
</div>
 <Footer />
    </>
  );
}

export default Home;
