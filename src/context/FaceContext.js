import React from 'react'

function FaceContext({ language }) {
  return (
    <>
      {language === "Arabic" ?
        <div className="mt-52">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white cursor-pointer">كامل محمد</h1>
          <p className="lg:text-2xl text-white w-1/2 font-bold  mt-5">مبتدئ <strong className='highlight'>مطور ويب</strong>, <strong className='highlight'>مصمم</strong>  الواجهة الأمامية,  <strong className='highlight'>مصمم</strong> UI/UX.</p>
        </div> :
        
          <div className="mt-52">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white cursor-pointer">Kamel Mohmmed</h1>
            <p className="lg:text-2xl text-white w-1/2 font-bold  mt-5">Beginner <strong className='highlight'>Web Developer</strong>, <strong className='highlight'>Frontend</strong>  Designer, and <strong className='highlight'>UI/UX</strong> Designer.</p>
          </div>
        
      }
    </>
  )
}

export default FaceContext
