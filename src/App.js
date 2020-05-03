import React, { useState, Fragment } from "react";
import Intro from "./components/Intro/Intro";
import { Header } from "./components/Header";
import { AppRoutes } from "./components/AppRoutes";
import { SideDrawer } from "./components/SideDrawer";
import "./App.css";

function App() {
  const [introPageOpen, setIntroPageOpen] = useState(false);

  if (introPageOpen) {
    return <Intro />;
  }

  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
