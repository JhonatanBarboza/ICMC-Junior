import React from "react";
import TaskManager from "./components/TaskManager";
import Footer from "./components/Footer.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TaskManager />
      <Footer />
    </div>
  );
}

export default App;