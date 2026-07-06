import Footer from "../components/Footer";
import "./theme_core.css";

function ThemeCore() {
  return (
    <>
        <main className="theme-core-page">
          <section className="theme-core-card">
            <div className="theme-core-tabs">
                <button className="theme-core-tab active">Book</button>
                <button className="theme-core-tab">More</button>
            </div>
            <div className="theme-core-actions">
                <button className="theme-core-Previous">Previous</button>
                <button className="theme-core-next">Next</button>
            </div>
           

            </section>
        </main> 
       <Footer />
    </>
  );
}
export default ThemeCore;
