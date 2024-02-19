import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact"; // Import the Contact component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <Router>
        <Navbar selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/portfolio" element={<Home selectedLanguage={selectedLanguage} />} />
          <Route path="/portfolio/about" element={<About selectedLanguage={selectedLanguage} />} />
          <Route path="/portfolio/work" element={<Work selectedLanguage={selectedLanguage} />} />
          <Route path="/portfolio/contact" element={<Contact selectedLanguage={selectedLanguage} />} /> {/* Include the Contact component */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
