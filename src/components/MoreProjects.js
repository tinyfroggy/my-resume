import React from 'react'
import Cards from './Cards'
import CardsAr from './CardsAr'

function MoreProjects({language}) {
  return (
    <div className='bg-main'>
      {language === "Arabic" ? <CardsAr /> : <Cards />}
    </div>
  )
}

export default MoreProjects
