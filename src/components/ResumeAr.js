function ResumeAr() {

  function handelClick() {
    return alert('قريباً')
  }

  return (
    <div className='bg-main flex flex-col justify-center items-center'> 

      {/* ملفات PDF و Word */}
      <div className='flex justify-center items-center gap-5  h-52 text-white '>
        <button className="border-4 p-2 text-sm lg:text-lg lg:w-96 h-14 hover:text-main hover:bg-white" onClick={handelClick}>تحميل السيرة الذاتية بصيغة PDF</button>
        <button className="border-4 p-2 text-sm lg:text-lg lg:w-96 h-14 hover:text-main hover:bg-white" onClick={handelClick}>تحميل السيرة الذاتية بصيغة Word</button>
      </div>
      {/* === ملفات PDF و Word === */}

      {/* السيرة الذاتية */}
      <div className=" lg:h-240 text-white w-5/6 lg:pl-20 lg:pr-20">

        <h1 className="resumeH1MobileAr lg:resumeH1Ar">الخبرات المهنية</h1>

        <h2 className="resumeH2MobileAr lg:resumeH2Ar">مطور واجهات أمامية مبتدئ  2023 - الحالي</h2>

        <h3 className="resumeH3MobileAr lg:resumeH3Ar">✷  تصميم وتطوير المواقع والتطبيقات باستخدام HTML و CSS و JavaScript و React</h3>

        <h3 className="resumeH3MobileAr lg:resumeH3Ar">✷  التعاون مع فريق التصميم لإنشاء واجهات جذابة وسهلة الاستخدام</h3>

        <h3 className="resumeH3MobileAr lg:resumeH3Ar">✷  تطبيق تصميم استجابة وضمان التوافق عبر المتصفحات</h3>

        <h2 className="resumeH2MobileAr lg:resumeH2Ar">تعلم تطوير الويب ▪ 2023-2024</h2>

        <h1 className="resumeH1MobileAr lg:resumeH1Ar">التعليم</h1>

        <h2 className="resumeH2MobileAr lg:resumeH2Ar">خريج الثانوية العامة ▪ 2025</h2>

          {/* المهارات */}
        <div className="flex justify-between">

        {/* لغات البرمجة */}
          <div>

          <h1 className="resumeH1MobileAr lg:resumeH1Ar">لغات البرمجة</h1>

          <h2 className="resumeH2MobileAr lg:resumeH2Ar">✷  HTML5</h2>
          <h2 className="resumeH2MobileAr lg:resumeH2Ar">✷  CSS3</h2>
          <h2 className="resumeH2MobileAr lg:resumeH2Ar">✷  JavaScript</h2>
          <h2 className="resumeH2MobileAr lg:resumeH2Ar">✷  Python</h2>
          <h2 className="resumeH2MobileAr lg:resumeH2Ar">✷  C++</h2>

          </div>
          {/* === لغات البرمجة === */}


          {/* الأطر */}
          <div>

            <h1 className="resumeH1MobileAr lg:resumeH1Ar">اطر العمل</h1>

            <h2 className="resumeH2MobileAr lg:resumeH2Ar">✷  React</h2>
            <h2 className="resumeH2MobileAr lg:resumeH2Ar">✷  Tailwind CSS</h2>
            <h2 className="resumeH2MobileAr lg:resumeH2Ar">✷  BootStrap</h2>
            <h2 className="resumeH2MobileAr lg:resumeH2Ar">✷  Figma</h2>

          </div>
          {/* === الأطر === */}

        </div>
        {/* === المهارات === */}  

      </div>
      {/* === السيرة الذاتية === */}

    </div>
  )
}

export default ResumeAr;
