import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Services from '../Services/Services'
import MoreServices from '../MoreServices'
import PopularProducts from '../PopularProducts/PopularProducts'
import Team from '../Team/Team'
import CoreFeatures from '../CoreFeatures/CoreFeatures'
import Testimonial from '../Testimonial/Testimonial'


const Home = () => {
  return (
      <div>
        <Banner/>
        <About/>
        <Services/>
        <MoreServices/>
        <PopularProducts/>
        <Team/>
        <CoreFeatures/>
        <Testimonial/>
    </div>
  )
}

export default Home