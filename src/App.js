import MoreProjects from "./components/MoreProjects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import { useState } from "react";
import GetInTouchContext from "./context/GetInTouchContext";
import MyFooterContext from "./context/MyFooterContext";
import ResumeContext from "./context/ResumeContext";
import NavbarContext from "./context/NavbarContext";


function App() {

  const [language, setLanguage] = useState("Arabic");

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "Arabic" ? "English" : "Arabic"
    );
  };

  return (
    <>
      <Router>
        <NavbarContext language={language} onToggle={handleLanguageChange} /> 

        <Routes>
          <Route path="/" element={<Home language={language}  />} />
          <Route path="/moreProjects" element={<MoreProjects language={language} />} />
          <Route path="/resume" element={<ResumeContext language={language} />} />
        </Routes>

        <GetInTouchContext language={language} />

        <MyFooterContext language={language} />
      </Router>
    </>
  );
}

export default App;

