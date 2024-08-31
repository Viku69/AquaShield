import React from "react";
import {Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PredictPage from "./Pages/PredictPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/predict"  element ={<PredictPage/>} />
    </Routes>


  );
};

export default App;
