import React from 'react'
import Resume from '../components/Resume'
import ResumeAr from '../components/ResumeAr'

function ResumeContext({language}) {
  return (
    <>
      {language === "Arabic" ? <ResumeAr /> : <Resume />}
    </>
  )
}

export default ResumeContext
