import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "../src/Pages/Home";
import Courses from "./Pages/Courses.js";
import Live from "../src/Pages/Live";
import Contact from "./Pages/Contact.js";
import Contador from "./Pages/Contador";
import Hola from "./Pages/Hola";

function App() {
  return (
    <div className="container">
      <nav class="navbar">
        <ul class="ullist">
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/course" class="list">
            Courses
          </Link>
          <Link to="/live" class="list">
            Live course
          </Link>
          <Link to="/contact" class="list">
            Contact
          </Link>
          <Link to={ "/contador" } class="list">
            Contador
          </Link>
          <Link to={ "/hola" } class="list">
            Saludo con props
          </Link>  
        </ul>
      </nav>

      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/hola" element={<Hola />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
