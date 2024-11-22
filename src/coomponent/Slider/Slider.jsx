import React, { useState } from "react";
import "./Slider.css";

function Slider() {
  const images = ["1.png", "2.png", "3.png", "4.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handlePrev = (isModal) => {
    if (isModal) {
      setModalIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = (isModal) => {
    if (isModal) {
      setModalIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const openModal = () => {
    setModalIndex(currentIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button
          className="nav-btn1"
          onClick={() => handlePrev(false)}
        >
          {"<"}
        </button>
        <img
          className="slider-image"
          src={`/assets/${images[currentIndex]}`}
          alt={`Slide ${currentIndex}`}
          onClick={openModal}
        />
        <button
          className="nav-btn2"
          onClick={() => handleNext(false)}
        >
          {">"}
        </button>
      </div>

      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={`/assets/${img}`}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${currentIndex === index ? "active-thumbnail" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <button className="close-btn" onClick={closeModal}>
            ×
          </button>
          <button
            className="modal-nav nav-btn1"
            onClick={() => handlePrev(true)}
          >
            {"<"}
          </button>
          <img
            className="modal-image"
            src={`/assets/${images[modalIndex]}`}
            alt={`Modal Slide ${modalIndex}`}
          />
          <button
            className="modal-nav nav-btn2"
            onClick={() => handleNext(true)}
          >
            {">"}
          </button>

          <div className="modal-thumbnail">
            {images.map((img, index) => (
              <img
                key={index}
                src={`/assets/${img}`}
                alt={`Modal Thumbnail ${index}`}
                className={`thumbnail ${modalIndex === index ? "active-thumbnail" : ""}`}
                onClick={() => setModalIndex(index)}
              />
            ))}
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Slider;
