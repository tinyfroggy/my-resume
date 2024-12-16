import React from 'react'
import Navbar from '../components/Navbar'
import NavbarAr from '../components/NavbarAr'

function NavbarContext({language, onToggle}) {
  return (
    <>
      {language === "Arabic" ? <NavbarAr language={language} onToggle={onToggle} /> : <Navbar language={language} onToggle={onToggle} />}
    </>
  )
}

export default NavbarContext
