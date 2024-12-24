import FaceContext from "../context/FaceContext";
import WorkInfoContext from "../context/WorkInfoContext";
import { WorkInfo } from "../context/WorkInfoContext";
import MyWork from "./MyWork";
import WhoIsKamel from "./WhoIsKamel";

function Home({ t}) {
  return (
    <>
      {/*  main container */}
      <WorkInfoContext.Provider value={WorkInfo}>
        <div  className="bg-main lg:pr-10 lg:pl-10 flex justify-center items-center flex-col" >

          <div className="w-5/6 lg:pl-20 lg:pr-20">

            {/* face */}
            <FaceContext t={t} />
            {/* === face === */}

            {/* select work  */}
            <MyWork t={t} />
            {/* === select work */}

            {/* who is kamel */}
            <WhoIsKamel t={t} />
            {/* === who is kamel === */}

          </div>

        </div>
      </WorkInfoContext.Provider>
      {/* === main container === */}
    </>
  )
}

export default Home
