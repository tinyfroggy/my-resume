import React from 'react'
import MyFooter from '../components/MyFooter'
import MyFooterAr from '../components/MyFooterAr'

function MyFooterContext({language}) {
  return (
    <>
      {language === "Arabic" ? <MyFooterAr /> : <MyFooter />}
    </>
  )
}

export default MyFooterContext
