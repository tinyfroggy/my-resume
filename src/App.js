import MoreProjects from "./components/MoreProjects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import {  useState , useEffect } from "react";
import Navbar from "./components/Navbar";
import { useTranslation } from 'react-i18next';
import Resume from "./components/Resume";
import GetInTouch from "./components/GetInTouch";
import MyFooter from "./components/MyFooter";


function App() {

  const { t, i18n } = useTranslation();

  const storedLanguage = localStorage.getItem("language") || "Arabic";
  const [language, setLanguage] = useState(storedLanguage);

  const handleLanguageChange = () => {
    const newLanguage = language === "Arabic" ? "English" : "Arabic";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage === "Arabic" ? "ar" : "en");

    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    document.documentElement.dir = language === "Arabic" ? "rtl" : "ltr";
  }, [language])
  return (
    <>
      <Router>
      <Navbar language={language} onToggle={handleLanguageChange} t={t}/>

        <Routes>
          <Route path="/" element={<Home  t={t}  />} />
          <Route path="/moreProjects" element={<MoreProjects  t={t} />} />
          <Route path="/resume" element={<Resume  t={t} />} />
        </Routes>

        <GetInTouch  t={t} />

        <MyFooter  t={t} />
      </Router>
    </>
  );
}

export default App;

