import MoreProjects from "./components/MoreProjects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import GetInTouch from "./components/GetInTouch";
import Resume from "./components/Resume";


function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moreProjects" element={<MoreProjects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <GetInTouch/>

        <MyFooter/>
      </Router>
    </>
  );
}

export default App;

