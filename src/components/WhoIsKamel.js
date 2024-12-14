import React from 'react'
import { Link } from 'react-scroll';

function WhoIsKamel() {
  return (
    <>
      {/* who is kamle container orange */}
      <div className=" flex justify-center items-center mb-10 mt-144 ">

        {/* WHo is kamel green */}
        <div className="flex justify-between h-160 p-10 mb-10 w-4/5 mt-10">

          {/* border div */}
          <div className="border-8 border-white flex justify-center items-center rounded-t-full  w-1/2 mr-1">

            {/* img div */}
            <div className=" bg-white w-5/6 border-8 border-white rounded-t-full ">
              <img className="w-full h-full rounded-t-full" src={process.env.PUBLIC_URL + "../imgs/me4.png"} alt='my img' />
            </div>
            {/* === img div === */}

          </div>
          {/* === border div === */}

          {/* info div red */}
          <div className="text-white w-2/4 p-5">
            <h1 className="text-4xl mb-3 font-bold">Who is Kamel?</h1>
            <p className="mb-4 text-lg">
              <strong className='highlight'>Kamel Mohammed</strong> is a passionate designer and developer based in Jeddah, Saudi Arabia.
            </p>
            <p className="mb-4 text-lg">
              Although he has <strong className='highlight'>no formal industry experience</strong>, he has worked extensively on personal projects and side practices, constantly sharpening his skills.
            </p>
            <p className="mb-4 text-lg">
              Kamel enjoys creating simple, user-friendly designs and is always eager to learn new things. While you're here, feel free to <strong className='highlight'>say hi!</strong>
            </p>

            <Link
              to="getInTouch"
              smooth={true}
              duration={700}>
              <button className="border-4 border-white p-2 hover:bg-white hover:text-main">Get In Touch</button>
            </Link>

          </div>
          {/* === info div === */}

        </div>
        {/* === who is kamel === */}

      </div>
      {/* === who is kamle container === */}
    </>
  )
}

export default WhoIsKamel
