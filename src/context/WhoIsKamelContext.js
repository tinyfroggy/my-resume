import React from 'react'
import WhoIsKamel from '../components/WhoIsKamel'
import WhoIsKamelAr from '../components/WhoIsKamelAr'

function WhoIsKamelContext({language}) {
  return (
    <>
      {language === "Arabic" ? <WhoIsKamelAr /> : <WhoIsKamel />}
    </>
  )
}

export default WhoIsKamelContext
