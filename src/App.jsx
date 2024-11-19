import React, { useState } from "react";
import "./App.css";
import PlantList from "./Components/PlantList";
import AboutUs from "./Components/AboutUs";

function App() {
  const [showPlantList, setShowPlantList] = useState(false);

  const handleGetStarted = () => {
    setShowPlantList(true);
  };

  return (
    <>
      <header className="first_page">
        <div className="main_event">
          <div className="first_page_name_btn">
            <h1 className="budget_heading">NATURE</h1>
            <p className="budget_sentence"> Bring Nature Home</p>
            <div className="getstarted_btn">
              <button
                onClick={() => handleGetStarted()}
                className="get-started-btn"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="aboutus_main">
            <AboutUs />
          </div>
        </div>
      </header>

      <div className={`event-list-container ${showPlantList ? "visible" : ""}`}>
        <PlantList />
      </div>
    </>
  );
}

export default App;
