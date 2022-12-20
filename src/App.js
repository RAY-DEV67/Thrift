import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { useState } from "react";
import { Destination } from "./components/destination";
import { Crew } from "./components/crew";
import { useLocation } from "react-router-dom";
import { Technology } from "./components/technology";
import { motion, AnimateSharedLayout } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// export default Pagination;
