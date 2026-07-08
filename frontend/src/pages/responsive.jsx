import Footer from "../components/Footer";
import "./responsive.css";
import { useNavigate } from "react-router-dom";

function FlexibleLayout() {
 const navigate = useNavigate();
    return (
        <>

        <main className="theme-core-page">
          <section className="theme-core-card">
            <div className="theme-core-tabs">
                <button className="theme-core-tab active">Book</button>
                <button className="theme-core-tab">More</button>
            </div>
            <div className="theme-core-actions">
                <button className="theme-core-Previous" onClick={() => navigate("/flexible_layout")}>Previous</button>
                <button className="responsive-next" onClick={() => navigate("/multilanguage")}>Next</button>
            </div>

                <div className="theme-title">
                        <span>Fully Responsive</span>

                        <h2>Stellar display and clean interface across all devices!</h2>

                        <p>
                           No matter what screen resolution your customers use, Theme Lambda will look great on any device.
                        </p>
                </div>
                <hr className="theme-divider" />
                <img src="https://lambda-demo-01.redpithemes.com/pluginfile.php/143/mod_book/chapter/5/undraw_devices_re_dxae.svg" alt="Responsive Design" className="responsive-image" />
                
                <div className="theme-core-actions">
                <button className="theme-core-Previous" onClick={() => navigate("/flexible_layout")}>Previous</button>
                <button className="responsive-next" onClick={() => navigate("/multilanguage")}>Next</button>
            </div>
            </section>
            </main>
        
          <Footer />         
        </>
    );
}   

export default FlexibleLayout;