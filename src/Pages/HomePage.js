import React from "react";
// Import the CSS for the water animation
import '../animations.css'
import Header from "./Header";

const HomePage = () => {
    return (

        <div className="homepage-container">
            <div className="water-background">
                <Header/>
                <h1>Flood Prediction System</h1>
            </div>
        </div>
    );
};

export default HomePage;
