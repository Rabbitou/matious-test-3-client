import React from "react";
import "./App.css";
import ChartByGender from "./components/ChartByGender";
import ChartProductLine from "./components/ChartProductLine";
import ChartGenderType from "./components/ChartGenderType";

function App() {
  return (
    <div className="App">
      <ChartByGender />
      <ChartProductLine />
      <ChartGenderType />
    </div>
  );
}

export default App;
