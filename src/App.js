import React from "react";
import Header from "./components/Header";
import Week from './components/Week';
// import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Week />
      {/* <Todos /> */}
    </div>
  );
}

export default App;
