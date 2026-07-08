import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./built_in_components.css";
import { useNavigate } from "react-router-dom";

function BuiltInComponents() {
  const navigate = useNavigate();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/theme-core");
      console.log("API:", res.data);
      setFeatures(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="builtin-components-page">
        <section className="builtin-components-card">
          <div className="builtin-components-tabs">
            <button className="builtin-components-tab active">Book</button>
            <button className="builtin-components-tab">More</button>
          </div>

          <div className="builtin-components-actions">
            <button
              className="builtin-components-Previous"
              onClick={() => navigate("/multilanguage")}
            >
              Previous
            </button>
            <button className="builtin-components-next">Next</button>
          </div>

          <div className="builtin-components-title">
            <span>Built-in Components</span>

            <h2>Powerful and Easy to Use Components</h2>

            <p>
              Lambda comes with a full set of built-in components and blocks
              that you can use to create amazing pages without coding.
            </p>
          </div>

          <hr className="theme-divider" />

          <div className="builtin-components-container">
            <div className="builtin-components-right">
              <img
                src="https://lambda-demo-01.redpithemes.com/pluginfile.php/143/mod_book/chapter/5/undraw_building_re_xfcm.svg"
                alt="Built-in Components"
                className="builtin-components-image"
              />

              <div className="builtin-components-left">
                <div className="builtin-components-grid">
                  {Array.isArray(features) &&
                    features.map((item) => (
                      <div className="builtin-components-item" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="builtin-components-actions">
            <button
              className="builtin-components-Previous"
              onClick={() => navigate("/multilanguage")}
            >
              Previous
            </button>
            <button className="builtin-components-next">Next</button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BuiltInComponents;
