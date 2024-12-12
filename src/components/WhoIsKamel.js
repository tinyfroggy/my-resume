import React from 'react'

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
            <h1 className="text-4xl mb-3">who is kamle</h1>
            <p className="mb-4 text-lg">Jey Austen is a senior web designer and illustrator from howdy and rowdy Austin, Texas. Currently accepting clients and full time opportunities.</p>
            <p className="mb-4 text-lg">With 10+ years of creative experience across multiple industries – athletics, entertainment, and fintech,
              for starters – Jey has seen some shit, and loves learning new things and thinking on their feet.</p>
            <p className="mb-4 text-lg">Jey loves teaching creatives, and mentoring designers on best practices in Figma and Procreate. While you're here, be sure to say hi, especially if you're in education, activism, or entertainment!</p>
            <button className="border-4 border-white p-2 hover:bg-white hover:text-main">get in to</button>
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
