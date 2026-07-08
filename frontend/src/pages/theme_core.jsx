import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./theme_core.css";
import { useNavigate } from "react-router-dom";

function ThemeCore() {
    const navigate = useNavigate();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/theme-core");

      console.log("API:", res.data);

      // If API returns an array
      setFeatures(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="theme-core-page">
        <section className="theme-core-card">
          <div className="theme-core-tabs">
            <button className="theme-core-tab active">Book</button>
            <button className="theme-core-tab">More</button>
          </div>

          <div className="theme-core-actions">
            <button className="theme-core-Previous" onClick={() => navigate("/typography")}>Previous</button>
            <button className="theme-core-next" onClick={() => navigate("/flexible_layout")}>Next</button>
          </div>

          <div className="theme-title">
            <span>Theme Core Features</span>

            <h2>Options for everything you need!</h2>

            <p>
              Theme Lambda allows you to build your own style.
              It comes bundled with many powerful options and clever features.
            </p>
          </div>

          <section className="theme-section">
            <div className="theme-container">
              {Array.isArray(features) &&
                features.map((item) => (
                  <div className="theme-card" key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
            </div>
          </section>

          <img
            src="https://lambda-demo-01.redpithemes.com/pluginfile.php/143/mod_book/chapter/9/undraw_elements_re_25t9.svg"
            alt="Theme Core"
            className="theme-core-image"
          />

          <div className="theme-core-actions">
             <button className="theme-core-Previous" onClick={() => navigate("/typography")}>Previous</button>
             <button className="theme-core-next" onClick={() => navigate("/flexible_layout")}>Next</button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ThemeCore;