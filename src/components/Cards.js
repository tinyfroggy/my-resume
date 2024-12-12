import React, { useContext } from 'react';
import WorkInfoContext from '../context/WorkInfoContext';

function Cards() {
  const workInfo = useContext(WorkInfoContext);

  return (
    <>
      {/* container cards */}
      <div className="absolute top-40">

          {/* cards */}
          <div className='flex gap-2'>

            {workInfo.map((info) => (
              <div key={info.id} className='borderHoverE'>
                {/* card */}
                <div className="border-4 border-white flex flex-col justify-center w-96 ">

                  <a href={info.link}>
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
