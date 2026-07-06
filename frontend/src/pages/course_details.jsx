import Footer from "../components/Footer";
import "./course_details.css";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaPinterestP,
  FaCheck,
  FaRegUser,
  FaChevronRight,
} from "react-icons/fa";

const courseImage =
  "https://lambda-demo-01.redpithemes.com/pluginfile.php/242/course/overviewfiles/course-img.jpg";

const teacherImage =
  "https://lambda-demo-01.redpithemes.com/pluginfile.php/278/user/icon/lambda2/f1?rev=7586";

const tags = ["#Algebra", "#Geometry", "#Trigonometry"];

const learningItems = [
  "Solve algebraic equations",
  "Work with formulas to solve equations",
  "Work with coordinate geometry",
  "Calculate percentages as well as simple and compound interest",
  "Solve quadratic equations and systems of linear equations",
  "Work with functions and draw graphs from a table of values",
];

const courseDetails = [
  ["Duration:", "3 - 5 hours"],
  ["Skill level:", "Beginner"],
  ["Language:", "English"],
  ["Certificate:", "Yes"],
];

function CourseDetails() {
  return (
    <>
      <main className="course-details-page">
        <div className="course-details-card" id="course-details-top">
          <div className="course-details-grid">
            <div className="course-details-left">
              <div className="course-intro-row">
                <img
                  src={courseImage}
                  alt="Junior Mathematics"
                  className="course-cover-image"
                />

                <div className="course-title-block">
                  <p>Course category: Science and Mathematics</p>
                  <h1>Junior Mathematics</h1>
                  <div className="course-tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="course-share-row" aria-label="Share course">
                <a href="/" className="share-button facebook">
                  <FaFacebookF />
                  Facebook
                </a>
                <a href="/" className="share-button x-share">
                  <strong>X</strong>
                  Share on X
                </a>
                <a href="/" className="share-button whatsapp">
                  <FaWhatsapp />
                  Whatsapp
                </a>
                <a href="/" className="share-button linkedin">
                  <FaLinkedinIn />
                  LinkedIn
                </a>
                <a href="/" className="share-button pinterest">
                  <FaPinterestP />
                  pinterest
                </a>
              </div>

              <section className="course-summary-section">
                <h2>Course summary</h2>
                <p>
                  This is a sample course with contents and activities. You can
                  take a look how resources and activities are displayed in a
                  course view. This sample course uses the "Topics" course
                  format.
                </p>
              </section>

              <section className="learn-section">
                <h3>WHAT YOU WILL LEARN</h3>
                <ul>
                  {learningItems.map((item) => (
                    <li key={item}>
                      <FaCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="course-details-right">
              <div className="information-box">
                <h2>Information</h2>
                <p>Opens: 8/01/24</p>
                <p>The course does not have an end time</p>
                <button type="button">Enrol me in this course!</button>
              </div>

              <section className="course-side-section">
                <h2>Course details</h2>
                <div className="detail-table">
                  {courseDetails.map(([label, value]) => (
                    <div className="detail-row" key={label}>
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="course-side-section course-contacts">
                <h2>Course contacts</h2>
                <h3>TEACHER</h3>
                <div className="teacher-row">
                  <img src={teacherImage} alt="Tony Teacher" />
                  <div>
                    <p>Tony Teacher</p>
                    <a href="/">
                      <FaChevronRight />
                      View profile
                    </a>
                  </div>
                </div>

                <div className="participants-block">
                  <h3>PARTICIPANTS</h3>
                  <p>
                    <FaRegUser />
                    Enrolled students: 4
                  </p>
                </div>
              </section>
            </aside>
          </div>

          <section className="enrolment-options">
            <h2>Enrolment options</h2>
            <p>Guests cannot access this course. Please log in.</p>
            <button type="button">Continue</button>
          </section>
        </div>

        <a href="#course-details-top" className="course-scroll-top">
          <FaChevronRight />
        </a>
      </main>
      <Footer />
    </>
  );
}

export default CourseDetails;
