import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeView } from "./components/HomeView/HomeView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  );
}

export default App;
