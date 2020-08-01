import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar"


function App() {
  return (
    <Router>
      <NavBar />
      <h1>hello whirled</h1>
    </Router>
  );
}

export default App;
