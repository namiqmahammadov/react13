import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Haqqında</Link>
            </li>
            <li>
              <Link to="/projects">İş Nümunələri</Link>
            </li>
            <li>
              <Link to="/contact">Əlaqə Məlumatları</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
