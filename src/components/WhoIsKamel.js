import React from 'react';
import { Link } from 'react-scroll';

function WhoIsKamel({ t }) {
  return (
    <>
      {/* Who is Kamel Container */}
      <div className="flex justify-center items-center mb-10 mt-288 lg:mt-144">

        {/* Who is Kamel Content */}
        <div className="flex justify-between h-160 lg:p-10 mb-10 w-4/5 mt-10">

          {/* Image Container */}
          <div className="border-8 border-white flex justify-center items-center rounded-t-full w-1/2 mr-1">
            <div className="bg-white w-5/6 border-8 border-white rounded-t-full">
              <img 
                className="w-full h-full rounded-t-full" 
                src={process.env.PUBLIC_URL + "/imgs/me4.png"} 
                alt={t("Kamel's Image")} 
              />
            </div>
          </div>

          {/* Info Container */}
          <div className="text-white w-2/4 lg:p-5">
            <h1 className="text-lg lg:text-4xl mb-3 font-bold">{t("Who is Kamel?")}</h1>
            <p className="mb-4 text-sm lg:text-lg">
              <strong className="highlight">{t("Kamel Mohammed")}</strong> {t("is a passionate designer and developer based in Jeddah, Saudi Arabia.")}
            </p>
            <p className="mb-4 text-sm lg:text-lg">
              {t("Although he has")} <strong className="highlight">{t("no formal industry experience")}</strong>, {t("he has worked extensively on personal projects and side practices, constantly sharpening his skills.")}
            </p>
            <p className="mb-4 text-sm lg:text-lg">
              {t("Kamel enjoys creating simple, user-friendly designs and is always eager to learn new things. While you're here, feel free to")} <strong className="highlight">{t("say hi!")}</strong>
            </p>

            <Link to="getInTouch" smooth={true} duration={700}>
              <button className="border-4 border-white p-2 hover:bg-white hover:text-main">
                {t("Get In Touch")}
              </button>
            </Link>
          </div>

        </div>
        {/* End of Who is Kamel Content */}

      </div>
      {/* End of Who is Kamel Container */}
    </>
  );
}

export default WhoIsKamel;
