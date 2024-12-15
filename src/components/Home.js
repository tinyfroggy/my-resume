import Face from "../components/Face";
import MyWork from "../components/MyWork";
import WhoIsKamel from "../components/WhoIsKamel";
import WorkInfoContext from "../context/WorkInfoContext";
import { WorkInfo } from "../context/WorkInfoContext";

function Home() {
  return (
    <>
      {/*  main container */}
      <WorkInfoContext.Provider value={WorkInfo}>
        <div className="bg-main lg:pr-10 lg:pl-10 flex justify-center items-center flex-col">

          <div className="w-5/6 lg:pl-20 lg:pr-20 ">

            {/* face */}
            <Face />
            {/* === face === */}

            {/* select work  */}
            <MyWork />
            {/* === select work */}

            {/* who is kamel */}
            <WhoIsKamel />
            {/* === who is kamel === */}

          </div>

        </div>
      </WorkInfoContext.Provider>
      {/* === main container === */}
    </>
  )
}

export default Home
