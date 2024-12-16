import React, { useContext } from 'react';
import WorkInfoContextAr from '../context/WorkInfoContextAr';

function CardsAr() {
  const workInfo = useContext(WorkInfoContextAr);

  return (
    <>
      {/* حاوية الكروت */}
      <div className='w-5/6 pl-14 lg:pr-10 pt-5'>

        {/* الكروت */}
        <div className='grid grid-cols-1 grid-rows-1 gap-2 lg:grid-cols-3 lg:grid-rows-3 lg:w-screen lg:gap-10 lg:h-288'>

          {workInfo.map((info) => (
            <div key={info.id} className='borderHoverE lg:w-97 lg:h-98'>
              {/* كارت */}
              <div className="border-2 lg:border-4 border-white flex flex-col justify-center lg:w-96">

                <a href={info.link} target="_blank" rel='noreferrer'>
                  {/* صورة */}
                  <img className="w-full" src={process.env.PUBLIC_URL + info.srcImg} alt={info.title} />
                  {/* === صورة === */}

                  {/* معلومات */}
                  <div className="text-white w-full h-52 p-2">
                    <h2 className="text-lg lg:text-xl mt-5 mb-5">{info.title}</h2>
                    <p className='text-sm lg:text-md'>{info.description}</p>
                  </div>
                  {/* === معلومات === */}
                </a>

              </div>
              {/* === كارت === */}
            </div>
          ))}

        </div>
        {/* === الكروت === */}

      </div>
      {/* === حاوية الكروت === */}
    </>
  )
}

export default CardsAr;
