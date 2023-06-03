import React from 'react'
import Navbar from '../components/Navabar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroTwo from '../components/HeroTwo/HeroTwo'
import Work from '../components/Work/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroTwo heading="PROJECTS." text="Some of my recent works."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project