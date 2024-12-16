import FaceContext from "../context/FaceContext";
import MyWorkContext from "../context/MyWorkContext";
import WhoIsKamelContext from "../context/WhoIsKamelContext";
import WorkInfoContext from "../context/WorkInfoContext";
import { WorkInfo } from "../context/WorkInfoContext";

function Home({language}) {
  return (
    <>
      {/*  main container */}
      <WorkInfoContext.Provider value={WorkInfo}>
        <div  className="bg-main lg:pr-10 lg:pl-10 flex justify-center items-center flex-col" >

          <div className="w-5/6 lg:pl-20 lg:pr-20">

            {/* face */}
            <FaceContext language={language} />
            {/* === face === */}

            {/* select work  */}
            <MyWorkContext language={language} />
            {/* === select work */}

            {/* who is kamel */}
            <WhoIsKamelContext language={language} />
            {/* === who is kamel === */}

          </div>

        </div>
      </WorkInfoContext.Provider>
      {/* === main container === */}
    </>
  )
}

export default Home
