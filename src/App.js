import Face from "./components/Face";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import WhoIsKamel from "./components/WhoIsKamel";
import GetInTouch from "./components/GetInTouch";
import MyFooter from "./components/MyFooter";
import WorkInfoContext from "./context/WorkInfoContext";
import { WorkInfo } from "./context/WorkInfoContext";
import MoreProjects from "./components/MoreProjects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      {/*  main container */}
      <WorkInfoContext.Provider value={WorkInfo}>
        <div className="bg-main pr-10 pl-10 flex justify-center items-center flex-col">

          <div className="w-5/6 pl-20 pr-20 ">

            {/* Navbar */}
            <Navbar />
            {/* === Navbar === */}

            {/* face */}
            <Face />
            {/* === face === */}

            {/* select work  */}
            <MyWork />
            {/* === select work */}

            {/* who is kamel */}
            <WhoIsKamel />
            {/* === who is kamel === */}

            {/* get in touch */}
            <GetInTouch />
            {/* === get in touch === */}

            {/* footer */}
            <MyFooter />
            {/* === footer === */}

          </div>

        </div>
      </WorkInfoContext.Provider>
      {/* === main container === */}
    </>
  );
}

export default App;

