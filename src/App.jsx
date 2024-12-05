import "./App.css";

import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="body-sec">
      <div className="section">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
