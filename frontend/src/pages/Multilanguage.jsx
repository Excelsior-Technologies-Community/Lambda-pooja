import Footer from "../components/Footer";
import "./Multilanguage.css";
import { useNavigate } from "react-router-dom";
function Multilanguage() {
    const navigate = useNavigate();
     const features = [
    {
      title: "Full Multilanguage Support",
      description:
        'Lambda does not contain any hard-coded text or phrases..',
    },
    {
      title: "Moodle Language Menu",
      description:
        "All header styles fully support the Moodle core language menu.",
    },
    {
      title: "Multilanguage Filter",
      description:
        "For your own contents you can use the Moodle multilanguage filter.",
    },
    {
      title: "Course Files",
      description:
        "Show resources and activities within your course only for certain users depending on their language.",
    },
  ];

    return (
        <>

        <main className="multilanguage-page">
          <section className="multilanguage-card">
            <div className="multilanguage-tabs">
                <button className="multilanguage-tab active">Book</button>
                <button className="multilanguage-tab">More</button>
            </div>
            <div className="multilanguage-actions">
                <button className="multilanguage-Previous" onClick={() => navigate("/responsive")}>Previous</button>
                <button className="multilanguage-next" onClick={() => navigate("/built-in-components")}>Next</button>
            
            </div>

                <div className="multilanguage-title">
                        <span>100% Multilanguage Support</span>

                        <h2>Over 100 built-in language packs that can easily be enabled</h2>

                        <p>
                           Do you want your Moodle site content to be displayed in more than one language? You've come to the right place with Theme Lambda!
                        </p>
                </div>
   <hr className="theme-divider" />
        <div className="multilanguage-container">
            
             <div className="theme-core-right">
            <img
              src="https://lambda-demo-01.redpithemes.com/pluginfile.php/143/mod_book/chapter/4/undraw_around_the_world_re_rb1p.svg"        alt="Theme Core"
              className="theme-core-image"
            />

            <div className="theme-core-left">
            <div className="theme-grid">
                  {features.map((item, index) => (
                    <div className="theme-card" key={index}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
            </div>
          </div> 

          </div>
        </div> 

            <div className="multilanguage-actions">
                  <button className="multilanguage-Previous" onClick={() => navigate("/responsive")}>Previous</button>
                  <button className="multilanguage-next" onClick={() => navigate("/built-in-components")}>Next</button>
            </div>

        </section>
    </main>
        
          <Footer />         
        </>
    );
}   

export default Multilanguage;