import React from 'react';

function FaceContext({  t }) {
  return (
    <div className="mt-52">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white cursor-pointer">
        {t("Kamel Mohmmed")}
      </h1>
      
      <p className="lg:text-2xl text-white w-1/2 font-bold mt-5">
        {t("Beginner")} 
        <strong className="highlight"> {t("Web Developer")}</strong>, 
        <strong className="highlight"> {t("Frontend")}</strong> 
        {t("Designer, and")} 
        <strong className="highlight"> {t("UI/UX")}</strong> 
        {t("Designer")}.
      </p>
    </div>
  );
}

export default FaceContext;
