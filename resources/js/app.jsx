import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Home from "./home"; // ⬅️ استدعاء الـ Home
 


function App() {
  return (
    <>
      <Header /> {/* استدعاء الـ Header */}
      <Home /> {/* استدعاء الـ Home */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(<App />);

const homeRoot = ReactDOM.createRoot(document.getElementById("home"));
homeRoot.render(<Home />);
