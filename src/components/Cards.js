import React, { useContext } from 'react';
import WorkInfoContext from '../context/WorkInfoContext';

function Cards() {
  const workInfo = useContext(WorkInfoContext);

  return (
    <>
      {/* container cards */}
      <div className='w-5/6 pl-14 pr-10 pt-5 '>

          {/* cards */}
          <div className='grid grid-cols-3 grid-rows-3 w-screen gap-10 h-288'>

            {workInfo.map((info) => (
              <div key={info.id} className='borderHoverE w-97 h-98'>
                {/* card */}
                <div className="border-4 border-white flex flex-col justify-center w-96 ">

                  <a href={info.link} target="_blank" rel='noreferrer'>
                    {/* img */}
                    <img className="w-full" src={process.env.PUBLIC_URL + info.srcImg} alt={info.title} /> 
                    {/* === img === */}                  

                    {/* info */}
                    <div className="text-white w-full h-52 p-2">
                      <h2 className="text-xl mt-5 mb-5">{info.title}</h2>
                    <p>{info.description}</p>
                    </div>
                    {/* === info === */}
                  </a>

                </div>
                {/* === card === */}
              </div>
            ))}

          </div>
          {/* === cards === */}

      </div>
      {/* === container cards === */}
    </>
  )
}

export default Cards;
