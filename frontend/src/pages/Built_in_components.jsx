import Footer from "../components/Footer";
import "./Built_in_components.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function BuiltInComponents() {
    const navigate = useNavigate();
    const [components, setComponents] = useState([]);

useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    const res = await axios.get(
        "http://localhost:5000/api/built-in-components"
    );

    setComponents(res.data);
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
                <button className="builtin-components-Previous" onClick={() => navigate("/multilanguage")}>Previous</button>
              
            </div>

                <div className="builtin-components-title">
                        <span>Available Components</span>

                        <h2>Full of features, easy to include</h2>

                        <p>
                          
                          ultiple components that you can customize. It's very easy to create a page with your unique settings and you don't need to know a single line of code.
                        </p>
                </div>
            <hr className="theme-divider" />

            

            {components.map((item) => (
    <div className="course-card" key={item.id}>

        <img src={item.image} alt={item.title} />

        <div className="course-content">

            <h2>{item.title}</h2>

            <span>{item.category}</span>

            <p>{item.description}</p>

            <button>{item.button_text}</button>

        </div>

    </div>
))}

     <div className="builtin-components-actions">
                <button className="builtin-components-Previous" onClick={() => navigate("/multilanguage")}>Previous</button>
              
            </div>
            
        </section>
    </main>
        
          <Footer />         
        </>
    );
}   

export default BuiltInComponents;