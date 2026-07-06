import { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import "./all_Courses.css";
import Footer from "../components/Footer";

const introImage =
  "https://lambda-demo-01.redpithemes.com/pluginfile.php/170/course/overviewfiles/course-img.jpg";

const introVideoUrl = "https://www.youtube.com/embed/DubiRbeDpnM";

const artHistoryHeroImage =
  "https://lambda-demo-01.redpithemes.com/pluginfile.php/37/course/overviewfiles/course-01.jpg";

const artHistoryTiles = [
  {
    title: "Background",
    image:
      "https://lambda-demo-01.redpithemes.com/pluginfile.php/37/format_tiles/tilephoto/6/tilephoto/2_goi_background.jpg",
  },
  {
    title: "Focus on Monet",
    image:
      "https://lambda-demo-01.redpithemes.com/pluginfile.php/37/format_tiles/tilephoto/7/tilephoto/2_goi_monet.jpg",
  },
  {
    title: "Focus on Pissarro",
    image:
      "https://lambda-demo-01.redpithemes.com/pluginfile.php/37/format_tiles/tilephoto/8/tilephoto/2_goi_pissaro.jpg",
  },
  {
    title: "Feedback",
    image:
      "https://lambda-demo-01.redpithemes.com/pluginfile.php/37/format_tiles/tilephoto/9/tilephoto/2_goi_feedback.jpg",
  },
];

const biologyHeroImage =
  "https://lambda-demo-01.redpithemes.com/pluginfile.php/62/course/overviewfiles/course-img.jpg";

const biologyAnnouncementIcon =
  "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/forum/1758302184/monologo?filtericon=1";

const biologyPowerpointIcon =
  "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/core/1758302184/f/powerpoint-24";

const biologyUrlIcon =
  "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/url/1758302184/monologo?filtericon=1";

const biologyGlossaryIcon =
  "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/glossary/1758302184/monologo?filtericon=1";

const biologyDocumentIcon =
  "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/core/1758302184/f/document-24";

const biologyTextIcon =
  "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/core/1758302184/f/text-24";

const biologyWikiIcon =
  "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/wiki/1758302184/monologo?filtericon=1";

const biologyInformationResources = [
  "MBG Net Biomes of the World",
  "Blue Planet Biomes",
  "Biomes by University of California Museum of Paleontology",
  "Biome Basics",
];

const biologyProjectResources = [
  {
    title: "Biome Research project (Word doc)",
    type: "document",
    icon: biologyDocumentIcon,
  },
  {
    title: "Biome Research Project (rtf)",
    type: "text",
    icon: biologyTextIcon,
    note: "(Use this one if you don't have MS Word)",
  },
  {
    title: "Biome Expert Wiki",
    type: "wiki",
    icon: biologyWikiIcon,
  },
];

const sampleResources = [
  {
    title: "A PDF document",
    type: "page",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/page/1758302184/monologo?filtericon=1",
  },
  {
    title: "Sample web link",
    type: "url",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/url/1758302184/monologo?filtericon=1",
  },
  {
    title: "Sample folder",
    type: "folder",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/folder/1758302184/monologo?filtericon=1",
    description:
      "This is a folder. A folder is a useful way to organise multiple files and helps declutter the course page. A folder may contain several files and sub-folders.",
  },
  {
    title: "Assignment - upload files",
    type: "assign",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/assign/1758302184/monologo?filtericon=1",
    badge: "Receive a grade",
    dates: ["Opened: Thursday, 4 July 2024, 7:00 PM", "Due: Monday, 5 January 2026, 5:55 PM"],
  },
];

const moreResources = [
  {
    title: "Book module",
    type: "book",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/book/1758302184/monologo?filtericon=1",
    description:
      "The Book module makes it easy to create multi-page resources with a book-like format.",
    isModuleIntro: true,
  },
  {
    title: "The Advantages of Learning Platforms",
    type: "page",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/page/1758302184/monologo?filtericon=1",
    badge: "View",
  },
  {
    title: "Sample quiz",
    type: "quiz",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/quiz/1758302184/monologo?filtericon=1",
    badge: "Receive a grade",
  },
  {
    title: "Workshop",
    type: "workshop",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/workshop/1758302184/monologo?filtericon=1",
    badges: ["Receive a grade", "Receive a passing grade"],
  },
  {
    title: "Glossary",
    type: "glossary",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/glossary/1758302184/monologo?filtericon=1",
  },
  {
    title: "Database",
    type: "data",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/data/1758302184/monologo?filtericon=1",
    badge: "Make entries: 1",
  },
];

const feedbackResources = [
  {
    title: "Chat",
    type: "chat",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/chat/1758302184/monologo",
    note: "Next chat time: Wednesday, 9 June 2027, 7:00 AM",
  },
  {
    title: "Feedback",
    type: "feedback",
    icon: "https://lambda-demo-01.redpithemes.com/theme/image.php/lambda2/feedback/1758302184/monologo",
  },
];

const courseSections = [
  "Introduction",
  "A sample course section",
  "More resources and activities",
  "Feedback",
];

function AllCourses() {

  const [allCourses, setAllCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openSections, setOpenSections] = useState([]);
  const [biologyActiveView, setBiologyActiveView] = useState("intro1");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCourses();
    getCategories();
  }, []);

  const getCourses = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get("http://localhost:5000/api/allcourses");
      setAllCourses(res.data);
    } catch (err) {
      console.log(err);
      setAllCourses([]);
      setError("Courses API is not loaded. Please restart the backend server.");
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/allcourses/categories");
      setCategories(res.data);
    } catch (err) {
      console.log(err);
      setCategories([]);
    }
  };

  const filterCourse = (e) => {

    const value = e.target.value;
    setSelected(value);
  };

  const handleCategoryClick = (category) => {
    setSelected(category);
    setSearchTerm("");
  };

  const openCourse = (course) => {
    setSelectedCourse(course);
    setOpenSections([]);
    setBiologyActiveView("intro1");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSection = (section) => {
    setOpenSections((current) =>
      current.includes(section)
        ? current.filter((item) => item !== section)
        : [...current, section]
    );
  };

  const toggleAllSections = () => {
    setOpenSections((current) =>
      current.length === courseSections.length ? [] : courseSections
    );
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const courses = allCourses.filter((course) => {
    const matchesCategory = selected === "" || course.category === selected;
    const matchesSearch =
      normalizedSearch === "" ||
      course.course_name.toLowerCase().includes(normalizedSearch) ||
      course.category.toLowerCase().includes(normalizedSearch) ||
      course.description.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  const isArtHistoryCourse = selectedCourse?.course_name === "Art History";
  const isBiologyCourse = selectedCourse?.course_name === "Biology";
  const isSpecialCourse = isArtHistoryCourse || isBiologyCourse;
  const biologyContentTitle =
    biologyActiveView === "project1" ? "Projects" : "Introduction";

  return (
    <div className="all-courses-page">

      <div className="all-courses-container">

        {selectedCourse ? (
          <div className="course-content-panel">
            <div className="course-content-actions">
              <button
                type="button"
                className="back-to-courses"
                onClick={() => setSelectedCourse(null)}
              >
                Back to courses
              </button>

              {!isSpecialCourse && (
                <button
                  type="button"
                  className="expand-all-button"
                  onClick={toggleAllSections}
                >
                  {openSections.length === courseSections.length ? "Collapse all" : "Expand all"}
                </button>
              )}
            </div>

            {isArtHistoryCourse ? (
              <div className="art-history-content">
                <div className="art-history-hero">
                  <img
                    src={artHistoryHeroImage}
                    alt={selectedCourse.course_name}
                  />
                  <div className="art-history-hero-overlay">
                    <span>{selectedCourse.category}</span>
                    <h2>{selectedCourse.course_name}</h2>
                  </div>
                </div>

                <h1>Lambda - Professional Moodle Theme - Demo Course</h1>

                <p>This demo course uses the "Tiles" course format.</p>

                <div className="art-history-tile-grid">
                  {artHistoryTiles.map((tile) => (
                    <div className="art-history-tile" key={tile.title}>
                      <img src={tile.image} alt={tile.title} />
                      <span>{tile.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : isBiologyCourse ? (
              <div className="biology-content">
                <h2 className="biology-section-title">General</h2>

                <div className="biology-hero">
                  <img
                    src={biologyHeroImage}
                    alt={selectedCourse.course_name}
                  />
                  <div className="biology-hero-overlay">
                    <span>{selectedCourse.category}</span>
                    <h2>{selectedCourse.course_name}</h2>
                  </div>
                </div>

                <h1>Lambda - Professional Moodle Theme - Demo Course</h1>

                <p className="biology-format-text">
                  This demo course uses the "Buttons" course format.
                </p>

                <div className="biology-announcement-row">
                  <span className="biology-announcement-icon">
                    <img src={biologyAnnouncementIcon} alt="" />
                  </span>
                  <span>Announcements</span>
                </div>

                <div className="biology-button-nav" aria-label="Course sections">
                  <span className="biology-button-label">Introduction</span>
                  <button
                    type="button"
                    className={`biology-round-button ${biologyActiveView === "intro1" ? "active" : ""}`}
                    onClick={() => setBiologyActiveView("intro1")}
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className={`biology-round-button ${biologyActiveView === "intro2" ? "active" : ""}`}
                    onClick={() => setBiologyActiveView("intro2")}
                  >
                    2
                  </button>
                  <span className="biology-button-label">Projects</span>
                  <button
                    type="button"
                    className={`biology-round-button ${biologyActiveView === "project1" ? "active" : ""}`}
                    onClick={() => setBiologyActiveView("project1")}
                  >
                    1
                  </button>
                  <span className="biology-round-button">2</span>
                  <span className="biology-round-button">3</span>
                  <span className="biology-button-label">Evaluation</span>
                  <span className="biology-round-button more">...</span>
                </div>

                <h2 className="biology-introduction-title">{biologyContentTitle}</h2>

                {biologyActiveView === "intro1" ? (
                  <>
                    <div className="biology-info-card">
                      <div className="icon-circle info"></div>
                      <div>
                        <h3>Part 1 - Unit Objectives</h3>
                        <p>
                          Biology is the study of life: the structure and function of living organisms and how they adapt, survive and evolve in changing environments. In this course you will explore diverse aspects of biology from cells to whole organisms.
                        </p>
                      </div>
                    </div>

                    <div className="biology-course-goal">
                      <h2>
                        Course Goal <span>Course Objective &amp; Unit Objective</span>
                      </h2>
                      <ul>
                        <li>Students will identify the characteristics of a biome and teach the other members of their group.</li>
                        <li>Students will create a wiki page for the biome they studied to use in teaching the other members of their group.</li>
                        <li>Students will demonstrate their knowledge of biomes in their travel brochure on the Biome World Tour.</li>
                        <li>Students will demonstrate their knowledge of the effect of biome characteristics by presenting a group project describing the adaptations needed for a specific animal to survive in a specific biome</li>
                      </ul>
                    </div>

                    <div className="biology-presentation-row">
                      <span className="biology-presentation-icon">
                        <img src={biologyPowerpointIcon} alt="" />
                      </span>
                      <span>Unit overview presentation</span>
                    </div>
                  </>
                ) : biologyActiveView === "intro2" ? (
                  <div className="biology-part-two-content">
                    <div className="biology-info-card">
                      <div className="icon-circle info"></div>
                      <div>
                        <h3>Part 2 - Explore the subject</h3>
                        <p>
                          Biology is the study of life: the structure and function of living organisms and how they adapt, survive and evolve in changing environments. In this course you will explore diverse aspects of biology from cells to whole organisms.
                        </p>
                      </div>
                    </div>

                    <div className="biology-resource-group">
                      <h3>01 | Information</h3>
                      <div className="biology-resource-list">
                        {biologyInformationResources.map((resource) => (
                          <div className="biology-resource-row" key={resource}>
                            <span className="resource-icon-box url">
                              <img src={biologyUrlIcon} alt="" className="resource-icon" />
                            </span>
                            <span>{resource}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="biology-resource-group task">
                      <h3>02 | Your task</h3>
                      <div className="biology-resource-list">
                        <div className="biology-resource-row">
                          <span className="resource-icon-box glossary">
                            <img src={biologyGlossaryIcon} alt="" className="resource-icon" />
                          </span>
                          <span>Biome glossary</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="biology-project-content">
                    <div className="biology-info-card">
                      <div className="icon-circle info"></div>
                      <div>
                        <h3>Project 1 - Become a Biome Expert</h3>
                        <p>
                          Your group will become the experts on your assigned biome. You will do research and build a wiki page for the class website together. During your assigned time, help transfer information, pictures, etc. to the wiki page for your biome.
                        </p>
                      </div>
                    </div>

                    <div className="biology-resource-list biology-project-list">
                      {biologyProjectResources.map((resource) => (
                        <div className="biology-project-resource" key={resource.title}>
                          <div className="biology-resource-row">
                            <span className={`resource-icon-box ${resource.type}`}>
                              <img src={resource.icon} alt="" className="resource-icon" />
                            </span>
                            <span>{resource.title}</span>
                          </div>
                          {resource.note && (
                            <p className="biology-resource-note">{resource.note}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
            <div className="course-section-list">
              {courseSections.map((section) => {
                const isOpen = openSections.includes(section);

                return (
                  <div
                    className={`course-section ${isOpen ? "open" : ""}`}
                    key={section}
                  >
                    <button
                      type="button"
                      className="course-section-row"
                      onClick={() => toggleSection(section)}
                    >
                      <span className="course-section-icon">
                        <FaChevronRight />
                      </span>
                      <span>{section}</span>
                    </button>

                    {section === "Introduction" && isOpen && (
                      <div className="introduction-content">
                        <div className="intro-hero">
                          <img
                            src={introImage}
                            alt={selectedCourse.course_name}
                          />
                          <div className="intro-hero-overlay">
                            <span>{selectedCourse.category}</span>
                            <h2>{selectedCourse.course_name}</h2>
                          </div>
                        </div>

                        <h1>
                          Lambda - Professional Moodle Theme - Demo Course
                        </h1>

                        <p>
                          This demo course uses the "Topics" course format.
                        </p>

                        <div className="intro-video">
                          <iframe
                            src={introVideoUrl}
                            title="What is Moodle LMS? Latest release video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>

                        <div className="announcement-row">
                          <span className="announcement-icon">
                            <FaChevronRight />
                          </span>
                          <span>Announcements</span>
                        </div>
                      </div>
                    )}

                    {section === "A sample course section" && isOpen && (
                      <div className="sample-section-content">
                        <div className="info-card">
                          <div className="icon-circle info"></div>
                          <div>
                            <h3>Info</h3>
                            <p>
                              Moodle provides the most flexible tool-set to support both blended learning and 100% online courses. You can easily integrate everything needed for a course using its complete range of built-in features, including external collaborative tools such as forums, wikis, chats and blogs.
                            </p>
                          </div>
                        </div>

                        <div className="resource-list">
                          {sampleResources.map((resource) => (
                            <div className="resource-item" key={resource.title}>
                              <div className="resource-main">
                                <span className={`resource-icon-box ${resource.type}`}>
                                  <img
                                    src={resource.icon}
                                    alt=""
                                    className="resource-icon"
                                  />
                                </span>
                                <span>{resource.title}</span>
                                {resource.badge && (
                                  <span className="resource-badge">
                                    {resource.badge}
                                  </span>
                                )}
                              </div>

                              {resource.description && (
                                <p className="resource-description">
                                  {resource.description}
                                </p>
                              )}

                              {resource.dates && (
                                <div className="resource-dates">
                                  {resource.dates.map((date) => {
                                    const [label, ...rest] = date.split(": ");

                                    return (
                                      <p key={date}>
                                        <strong>{label}:</strong> {rest.join(": ")}
                                      </p>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {section === "More resources and activities" && isOpen && (
                      <div className="more-resources-content">
                        <div className="info-card">
                          <div className="icon-circle info"></div>
                          <div>
                            <h3>Info</h3>
                            <p>
                              Moodle offers a diverse range of resources, including multimedia files, and interactive content. Additionally, Moodle facilitates engaging activities such as forums, quizzes, and collaborative assignments, fostering dynamic interaction and participatory learning among students.
                            </p>
                          </div>
                        </div>

                        <div className="resource-list more-resource-list">
                          {moreResources.map((resource) => (
                            <div
                              className={`resource-item ${resource.isModuleIntro ? "module-intro-item" : ""}`}
                              key={resource.title}
                            >
                              <div className="resource-main">
                                <span className={`resource-icon-box ${resource.type}`}>
                                  <img
                                    src={resource.icon}
                                    alt=""
                                    className="resource-icon"
                                  />
                                </span>
                                <span>{resource.title}</span>
                                {(resource.badge || resource.badges) && (
                                  <span className="resource-badge-group">
                                    {resource.badges?.map((badge) => (
                                      <span className="resource-badge" key={badge}>
                                        {badge}
                                      </span>
                                    ))}
                                    {resource.badge && (
                                      <span className="resource-badge">
                                        {resource.badge}
                                      </span>
                                    )}
                                  </span>
                                )}
                              </div>

                              {resource.description && (
                                <p className="resource-description">
                                  {resource.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {section === "Feedback" && isOpen && (
                      <div className="feedback-section-content">
                        <div className="resource-list feedback-resource-list">
                          {feedbackResources.map((resource) => (
                            <div className="resource-item feedback-resource-item" key={resource.title}>
                              <div className="resource-main">
                                <span className={`resource-icon-box ${resource.type}`}>
                                  <img
                                    src={resource.icon}
                                    alt=""
                                    className="resource-icon"
                                  />
                                </span>
                                <span>{resource.title}</span>
                              </div>

                              {resource.note && (
                                <div className="chat-time-note">
                                  <strong>Next chat time:</strong> Wednesday, 9 June 2027, 7:00 AM
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            )}
          </div>
        ) : (
          <>

        <h2 className="theme-title">
          Lambda Premium Moodle Theme
        </h2>

        <div className="all-courses-panel">

          {/* LEFT */}

          <div className="courses-main">

            <div className="category-select-wrap">

              <select
                className="category-dropdown"
                value={selected}
                onChange={filterCourse}
              >

                <option value="">All Categories</option>

                {categories.map((cat, index) => (

                  <option key={index} value={cat.category}>
                    {cat.category}
                  </option>

                ))}

              </select>

            </div>

            {loading && <p className="course-message">Loading courses...</p>}

            {error && <p className="course-error">{error}</p>}

            {!loading && !error && courses.length === 0 && (
              <p className="course-message">No courses found.</p>
            )}

            {!loading && !error && courses.map((course) => (

              <div className="course-card" key={course.id}>

                <div className="course-card-content">

                  <div className="course-image-wrap">

                    <img
                      src={course.image}
                      className="course-image"
                      alt={course.course_name}
                    />

                  </div>

                  <div className="course-detail">

                    <h3>{course.course_name}</h3>

                    <h6>
                      {course.category}
                    </h6>

                    <p>
                      {course.description}
                    </p>

                    <button
                      type="button"
                      className="course-button"
                      onClick={() => openCourse(course)}
                    >

                      Click to enter this course

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT */}

          <div className="courses-sidebar">

            <h4>Course categories</h4>
            <hr />
            <ul className="category-list">

              {categories.map((cat, index) => (

                <li
                  className={`category-item ${selected === cat.category ? "active" : ""}`}
                  key={index}
                >
                  <button
                    type="button"
                    className="category-link"
                    onClick={() => handleCategoryClick(cat.category)}
                  >
                    {cat.category}
                  </button>

                  <span className="category-count">
                    {cat.total}
                  </span>

                </li>

              ))}

            </ul>

            <div className="course-search-wrap">
              <input
                type="text"
                className="course-search"
                placeholder="Search courses"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="course-search-icon">
                <FaSearch />
              </span>
            </div>

          </div>

        </div>

          </>
        )}

      </div>
<Footer />
    </div>
    
  );
}

export default AllCourses;
