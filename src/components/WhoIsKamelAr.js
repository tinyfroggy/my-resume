import React from 'react'
import { Link } from 'react-scroll';

function WhoIsKamelAr() {
  return (
    <>
      {/* من هو كامل؟ - الحاوية البرتقالية */}
      <div className=" flex justify-center items-center mb-10 mt-288 lg:mt-144">

        {/* من هو كامل؟ - القسم الأخضر */}
        <div className="flex justify-between h-160 lg:p-10 mb-10 w-4/5 mt-10">

          {/* الحاوية ذات الحدود */}
          <div className="border-8 border-white flex justify-center items-center rounded-t-full w-1/2 mr-1">

            {/* حاوية الصورة */}
            <div className=" bg-white w-5/6 border-8 border-white rounded-t-full ">
              <img className="w-full h-full rounded-t-full" src={process.env.PUBLIC_URL + "../imgs/me4.png"} alt='صورتي' />
            </div>
            {/* === حاوية الصورة === */}

          </div>
          {/* === الحاوية ذات الحدود === */}

          {/* حاوية المعلومات */}
          <div className="text-white w-2/4 lg:p-5">
            <h1 className="text-lg lg:text-4xl mb-3 font-bold">من هو كامل؟</h1>
            <p className="mb-4 text-sm lg:text-lg">
              <strong className='highlight'>كامل محمد</strong> هو مصمم ومطور شغوف مقيم في جدة، المملكة العربية السعودية.
            </p>
            <p className="mb-4 text-sm lg:text-lg">
              على الرغم من أنه <strong className='highlight'>لا يمتلك خبرة رسمية في المجال</strong>، إلا أنه عمل بشكل مكثف على مشاريع شخصية وممارسات جانبية لتحسين مهاراته باستمرار.
            </p>
            <p className="mb-4 text-sm lg:text-lg">
              كامل يستمتع بإنشاء تصاميم بسيطة وسهلة الاستخدام، ودائمًا ما يكون متحمسًا لتعلم أشياء جديدة. أثناء وجودك هنا، لا تتردد في <strong className='highlight'>إلقاء التحية!</strong>
            </p>

            <Link
              to="getInTouch"
              smooth={true}
              duration={700}>
              <button className="border-4 border-white p-2 hover:bg-white hover:text-main">تواصل معي</button>
            </Link>

          </div>
          {/* === حاوية المعلومات === */}

        </div>
        {/* === من هو كامل؟ === */}

      </div>
      {/* === من هو كامل؟ - الحاوية البرتقالية === */}
    </>
  )
}

export default WhoIsKamelAr;
