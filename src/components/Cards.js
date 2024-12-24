import React, { useContext } from 'react';
import WorkInfoContext from '../context/WorkInfoContext';

function Cards({ t }) {
  const workInfo = useContext(WorkInfoContext);

  return (
    <> 
      {/* container cards */}
      <div className='w-5/6 pl-14 lg:pr-10 pt-5 '>

          {/* cards */}
          <div className='grid grid-cols-1 grid-rows-1 gap-2 lg:grid-cols-3 lg:grid-rows-3 lg:w-screen lg:gap-10 lg:h-288'>

            {workInfo.map((info) => (
              <div key={info.id} className='borderHoverE lg:w-97 lg:h-98'>
                {/* card */}
                <div className="border-2  lg:border-4 border-white flex flex-col justify-center lg:w-96 ">

                  <a href={info.link} target="_blank" rel='noreferrer'>
                    {/* img */}
                    <img className="w-full" src={process.env.PUBLIC_URL + info.srcImg} alt={info.title} /> 
                    {/* === img === */}                  

                    {/* info */}
                    <div className="text-white w-full h-52 p-2">
                      <h2 className="text-lg lg:text-xl mt-5 mb-5">{t(info.title)}</h2>
                      <p className='text-sm lg:text-md'>{t(info.description)}</p>
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
