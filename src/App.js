import React from "react";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import HomeDetail from "./pages/HomeDetail"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<HomeDetail />} />
        </Routes>
     
      <Footer />
    </>
  );
}

export default App;
