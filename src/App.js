import React from "react";
import "./App.css";
import Header from "./components/Head";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProgressBar pourcentage={5} />
      <Footer />
    </div>
  );
}

export default App;
