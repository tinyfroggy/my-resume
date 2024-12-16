import React from 'react'
import { NavLink } from 'react-router'

const cards =
  [
    {
      id: 1,
      link: "https://home-swit-home.netlify.app/",
      srcImg: "../imgs/Studi app 1.png",
      title: "تطبيق Studi",
      description: "هذا تطبيق ويب يسمح لك بإنشاء حساب وتتبع دراستك. يمكنك أيضًا إضافة مهام إلى قائمة المهام الخاصة بك ومتابعة تقدمك.",
    },
    {
      id: 2,
      link: "https://studyapp0.netlify.app/",
      srcImg: "../imgs/studi-app-2.png",
      title: "تطبيق Studi 2",
      description: "هذا تطبيق ويب يسمح لك بإنشاء حساب وتتبع دراستك. يمكنك أيضًا إضافة مهام إلى قائمة المهام الخاصة بك ومتابعة تقدمك.",
    },
    {
      id: 4,
      link: "https://xogamereacsfrogs.netlify.app/",
      srcImg: "../imgs/tik tak tok 4.png",
      title: "لعبة إكس أو",
      description: "هذا تطبيق ويب يسمح لك بإنشاء حساب وتتبع دراستك. يمكنك أيضًا إضافة مهام إلى قائمة المهام الخاصة بك ومتابعة تقدمك.",
    },
  ]

function MyWorkAr() {
  return (
    <>
      {/* العمل */}

      <div className="mt-64 mb-5 relative">

        <div className='flex justify-between'>
          <h1 className="text-white lg:text-7xl text-5xl mb-4">أعمال مختارة</h1>

          {/* الفراشة */}
          <div className="flex justify-end items-center">
            <img src="https://cdn.prod.website-files.com/62acc17f0bea707cb5017f40/62ace92c4159c5527c1f3f56_Moth.svg" loading="lazy" alt="فراشة" />
          </div>
          {/* === الفراشة === */}

        </div>

        {/* حاوية البطاقات */}
        <div className="absolute top-24 lg:top-40">

          {/* البطاقات */}
          <div className='grid grid-rows-1 lg:flex gap-2'>

            {cards.map((info) => (
              <div key={info.id} className='borderHoverE'>

                {/* البطاقة */}
                <div className="border-4 border-white flex flex-col justify-center lg:w-96">

                  <a href={info.link} target="_blank" rel='noreferrer'>
                    {/* الصورة */}
                    <img className="w-full" src={process.env.PUBLIC_URL + info.srcImg} alt={info.title} />
                    {/* === الصورة === */}

                    {/* المعلومات */}
                    <div className="text-white w-full h-52 p-2">
                      <h2 className="text-xl mt-5 mb-5">{info.title}</h2>
                      <p className='text-sm'>{info.description}</p>
                    </div>
                    {/* === المعلومات === */}
                  </a>

                </div>
                {/* === البطاقة === */}
              </div>
            ))}

          </div>
          {/* === البطاقات === */}

          <NavLink to={"/moreProjects"}>
            <button className="mt-5 mb-9 border-4 border-white text-white p-3 hover:bg-white hover:text-main">عرض المزيد</button>
          </NavLink>

        </div>
        {/* === حاوية البطاقات === */}

      </div>
      {/* === العمل === */}
    </>
  )
}

export default MyWorkAr
