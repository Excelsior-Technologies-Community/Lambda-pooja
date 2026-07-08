import Footer from "../components/Footer";
import "./flexible_layout.css";
import { useNavigate } from "react-router-dom";
function FlexibleLayout() {
const navigate = useNavigate();
     const features = [
    {
      title: "Layout Options",
      description:
        'Choose between a "boxed" and a "wide" page layout with further setting options.',
    },
    {
      title: "Header Options",
      description:
        "Create the perfect header for your site and add a flexible top bar.",
    },
    {
      title: "Footer Options",
      description:
        "Change the footer style with columns for core Moodle blocks and add your social channels.",
    },
    {
      title: "Moodle Blocks",
      description:
        "Multiple block positions allow you to enhance your core course content.",
    },
  ];

    return (
        <>

        <main className="theme-core-page">
          <section className="theme-core-card">
            <div className="theme-core-tabs">
                <button className="theme-core-tab active">Book</button>
                <button className="theme-core-tab">More</button>
            </div>
            <div className="theme-core-actions">
                <button className="theme-core-Previous" onClick={() => navigate("/theme_core")}>Previous</button>
                <button className="theme-core-next" onClick={() => navigate("/responsive")}>Next</button>
            </div>

                <div className="theme-title">
                        <span>Powerful Layout Options</span>

                        <h2>Quick and easy customization - options for everything you need!</h2>

                        <p>
                            Theme Lambda allows you to build your own style. You get easy and intuitive options to customize and change every part of your 
                            Moodle site. Lambda's theme options give you control over the layout settings, header, footer, sidebars, course pages and a lot more.
                        </p>
                </div>

        <div className="theme-core-container">
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

          {/* Right Side */}
          <div className="theme-core-right">
            <img
              src="https://lambda-demo-01.redpithemes.com/pluginfile.php/143/mod_book/chapter/6/undraw_choice_re_2hkp.svg"        alt="Theme Core"
              className="theme-core-image"
            />
          </div>
        </div> 



       <div className="theme-core-actions">
                <button className="theme-core-Previous" onClick={() => navigate("/theme_core")}>Previous</button> 
                <button className="theme-core-next" onClick={() => navigate("/responsive")}>Next</button>
            </div>

            </section>
            </main>
        
          <Footer />         
        </>
    );
}   

export default FlexibleLayout;