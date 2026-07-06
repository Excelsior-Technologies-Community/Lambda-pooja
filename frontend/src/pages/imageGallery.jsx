import { useEffect, useState } from "react";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import Footer from "../components/Footer";
import "./imageGallery.css";

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/gallery");
      setImages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="gallery-container">

        <h2>Lambda Image Gallery</h2>

        <p>Take a Visual Tour of the Lambda Bay Campus.</p>

        <div className="gallery-grid">

          {images.map((item, index) => (

            <div
              key={item.id}
              className={`gallery-item ${
                index === 2 ? "gallery-tall" : ""
              }`}
            >
              <img src={item.image_url} alt={item.title} />

              <div className="gallery-overlay">

                <a
                  href={item.image_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiPlus />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ImageGallery;