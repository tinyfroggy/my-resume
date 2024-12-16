import React from 'react'
import Cards from '../components/Cards'
import CardsAr from '../components/CardsAr'

function CardsContext({language}) {
  return (
    <>
      {language === "Arabic" ? <CardsAr /> : <Cards />}
    </>
  )
}

export default CardsContext
