import React from 'react'
import GetInTouch from '../components/GetInTouch'
import GetInTouchAr from '../components/GetInTouchAr'

function GetInTouchContext({language}) {
  return (
    <>
      {language === "Arabic" ? <GetInTouchAr /> : <GetInTouch />}
    </>
  )
}

export default GetInTouchContext
