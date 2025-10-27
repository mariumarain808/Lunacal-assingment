import React, { useState } from "react";
import {
  CircleHelp,
  LayoutGrid,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";

import img1 from "./assets/img.jpg";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([img1, img1, img1, img1]);
  const [startIndex, setStartIndex] = useState(0);
  // Move gallery left
  const handleLeft = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  // Move gallery right
  const handleRight = () => {
    if (startIndex < images.length - 3) {
      setStartIndex((prev) => prev + 1);
    }
  };

 
   const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages((prev) => [...prev, newImage]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "40px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Right Side Container */}
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* First Widget */}
        <div
          style={{
            backgroundColor: "#46494d",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
          }}
        >
          {/* Top Icons Row */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "80px",
              marginBottom: "10px",
              marginLeft: "-20px",
            }}
          >
            <CircleHelp style={{ width: "26px", color: "#6e747bff",  }} 
             
             />
            <LayoutGrid style={{ width: "26px", color: "#6e747bff", }} 
            
            />
          </div>

          {/* Tabs */}
        <div
  style={{
    display: "flex",
    backgroundColor: "#333", // Dark background for the container
    borderRadius: "12px", // Rounded corners for the container
    overflow: "hidden",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "18px",
    marginTop: "-140px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
  }}
>
  {["about", "experience", "recommended"].map((tab) => {
    const isActive = activeTab === tab;
    const tabLabel =
      tab === "about"
        ? "About Me"
        : tab === "experience"
        ? "Experiences"
        : "Recommended";

    return (
      <div
        key={tab}
        onClick={() => setActiveTab(tab)}
        style={{
          flex: 1,
          padding: "12px 0",
          border: "none",
          minHeight: "25px",
          backgroundSize: "200% 100%",
          backgroundPosition: isActive ? "0% 0%" : "100% 0%",
          margin: isActive ? "4px 2px" : "0", 
          backgroundColor: isActive ? "#444" : "transparent",

          
          boxShadow: isActive
            ? `
              0 4px 15px rgba(0, 0, 0, 0.5), /* Stronger shadow to make it float */
              inset 0 1px 3px rgba(255, 255, 255, 0.1) /* Inner highlight for depth */
            `
            : "none",
          color: isActive ? "white" : "#ccc", 
          cursor: "pointer",
          fontWeight: isActive ? "bold" : "normal",
          borderRadius: "10px", 

          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
         
        }}
      >
        {tabLabel}
      </div>
    );
  })}
</div>

          {/* Tab Content */}
          <div
            style={{
              backgroundColor: "#46494d",
              height: "160px",
              overflowY: "auto",
              marginLeft: "20px",
            }}
          >
            <p style={{ lineHeight: "1.4", fontSize: "16px", color: "#ddd" }}>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.
              <br />
              <br />
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with wife Carla and my 4-year-old twin
              daughters – Emma and Ella. Both of them are just starting school,
              so my calendar is usually blocked between 9–10 AM. This is a....
            </p>
          </div>
        </div>

        <div
          className="line"
          style={{
            backgroundColor: "#46494d",
            width: "90%",
            height: "3px",
            marginLeft: "10px",
            paddingLeft: "20px",
          }}
        ></div>

        {/* Gallery Widget */}
        <div
          style={{
            backgroundColor: "#46494d",
            borderRadius: "16px",
            padding: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "80px",
              marginBottom: "10px",
              marginLeft: "-15px",
            }}
          >
            <CircleHelp style={{ width: "26px", color: "#6e747bff" }} />
            <LayoutGrid style={{ width: "26px", color: "#6e747bff" }} />
          </div>

          {/* Gallery Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              marginTop: "-160px",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                color: "white",
                backgroundColor: "#0e0c0cff",
                padding: "8px 16px",
                borderRadius: "10px",
                marginLeft: "22px",
              }}
            >
              Gallery
            </h3>

            {/* Add Image & Navigation Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "30px",
                gap: "8px",
              }}
            >
              {/* Hidden File Input */}
              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />

              {/* Visible Upload Button */}
              <label htmlFor="imageUpload">
                <button
                
 onClick={() => document.getElementById("imageUpload").click()}
                  style={{
                    padding: "12px 16px",
                    backgroundColor: "#3a3a3a",
                    border: "none",
                    borderRadius: "20px",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                    boxShadow:
                      "inset 2px 2px 4px rgba(255, 255, 255, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.5), 4px 4px 8px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  + ADD IMAGE
                </button>
              </label>

              <button
                onClick={handleLeft}
                disabled={startIndex === 0}
                style={{
                  backgroundColor:
                    startIndex === 0 ? "#1a72caff" : "#383b3eff",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  color: "white",
                  fontSize: "16px",
                  cursor: startIndex === 0 ? "not-allowed" : "pointer",
                  opacity: startIndex === 0 ? 0.5 : 1,
                }}
              >
                <CircleArrowLeft style={{ color: "#9ea1a4ff" }} />
              </button>

              <button
                onClick={handleRight}
                disabled={startIndex >= images.length - 3}
                style={{
                  backgroundColor:
                    startIndex >= images.length - 3
                      ? "#1a72caff"
                      : "#383b3eff",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  color: "white",
                  fontSize: "16px",
                  cursor:
                    startIndex >= images.length - 3
                      ? "not-allowed"
                      : "pointer",
                  opacity: startIndex >= images.length - 3 ? 0.5 : 1,
                }}
              >
                <CircleArrowRight style={{ color: "#9ea1a4ff" }} />
              </button>
            </div>
          </div>

          {/* Gallery Container */}
          <div
            style={{
              width: "100%",
              maxWidth: "700px",
              overflow: "hidden",
              borderRadius: "12px",
              position: "relative",
              marginLeft: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "30px",
                transform: `translateX(-${startIndex * 200}px)`,
                transition: "transform 0.5s ease-in-out",
                width: "max-content",
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`gallery ${index + 1}`}
                  style={{
                    width: "170px",
                    height: "160px",
                    borderRadius: "12px",
                    objectFit: "cover",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
                    transition: "all 0.4s ease-in-out",
                    transformOrigin: "center",
                    flexShrink: 0,
                    filter: "grayscale(100%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.08) translateY(-8px) rotateZ(-3deg)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.6)";
                    e.currentTarget.style.filter = "grayscale(0%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1) translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 6px rgba(0,0,0,0.5)";
                    e.currentTarget.style.filter = "grayscale(100%)";
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="line"
          style={{
            backgroundColor: "#46494d",
            width: "90%",
            height: "4px",
            marginLeft: "10px",
            paddingLeft: "20px",
            marginTop: "6px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default App;
