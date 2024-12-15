import React from 'react'
import { NavLink } from 'react-router'

const cards =
  [
    {
      id: 1,
      link: "https://home-swit-home.netlify.app/",
      srcImg: "../imgs/Studi app 1.png",
      title: "Studi App",
      description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
    },
    {
      id: 2,
      link: "https://studyapp0.netlify.app/",
      srcImg: "../imgs/studi-app-2.png",
      title: "Studi App 2",
      description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
    }, {
      id: 4,
      link: "https://xogamereacsfrogs.netlify.app/",
      srcImg: "../imgs/tik tak tok 4.png",
      title: "X O  Game",
      description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
    },
  ]

function MyWork() {
  return (
    <>
      {/* work */}

      <div className="mt-64 mb-5 relative">

        <div className='flex justify-between'>
          <h1 className="text-white lg:text-7xl text-5xl mb-4">Selected Work</h1>

          {/* butfly */}
          <div className="flex justify-end items-center">
            <img src="https://cdn.prod.website-files.com/62acc17f0bea707cb5017f40/62ace92c4159c5527c1f3f56_Moth.svg" loading="lazy" alt="" />
          </div>
          {/* === butfly === */}

        </div>

        {/* container cards */}
        <div className="absolute top-24 lg:top-40">

          {/* cards */}
          <div className='grid grid-rows-1 lg:flex gap-2'>

            {cards.map((info) => (
              <div key={info.id} className='borderHoverE'>

                {/* card */}
                <div className="border-4  border-white flex flex-col justify-center lg:w-96  ">

                  <a href={info.link} target="_blank" rel='noreferrer'>
                    {/* img */}
                    <img className="w-full" src={process.env.PUBLIC_URL + info.srcImg} alt={info.title} />
                    {/* === img === */}

                    {/* info */}
                    <div className="text-white w-full h-52 p-2">
                      <h2 className="text-xl mt-5 mb-5">{info.title}</h2>
                      <p className='text-sm'>{info.description}</p>
                    </div>
                    {/* === info === */}
                  </a>

                </div>
                {/* === card === */}
              </div>
            ))}

          </div>
          {/* === cards === */}

          <NavLink to={"/moreProjects"}>
            <button className="mt-5 mb-9 border-4 border-white text-white p-3 hover:bg-white hover:text-main" >See More</button>
          </NavLink>

        </div>
        {/* === container cards === */}

      </div>
      {/* === work === */}
    </>
  )
}

export default MyWork
