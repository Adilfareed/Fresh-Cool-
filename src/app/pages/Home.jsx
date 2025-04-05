import React from 'react'


import OurWorkSection from '../components/OurWorkSection'
import ServicesSection from '../components/Services'
import ReviewsSection from '../components/ReviewsSection'
import HeroSection from '../components/HeroSection'
import FAQSection from '../components/faqs'
import OrderNowSection from '../components/OrderNowSection'

const Home = () => {
  return (
    <div>

     
      <HeroSection/>
      <OrderNowSection/>
      <OurWorkSection/>
      <ReviewsSection/>
      <ServicesSection/>
      <FAQSection/>

      
    </div>
  )
}

export default Home