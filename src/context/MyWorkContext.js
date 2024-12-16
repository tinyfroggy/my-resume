import React from 'react'
import MyWork from '../components/MyWork'
import MyWorkAr from '../components/MyWorkAr'

function MyWorkContext({language}) {
  return (
    <>
      {language === "Arabic" ? <MyWorkAr /> : <MyWork />}
    </>
  )
}

export default MyWorkContext
