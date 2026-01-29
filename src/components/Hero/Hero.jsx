import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section className='bg-white min-h-screen flex items-center'>
      <div className='container mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20'>
        
        {/* Hero content */}
        <div className='flex-1 flex flex-col justify-center'>
          
          <span className='bg-green-100 text-green-600 text-sm md:text-base px-4 md:px-5 py-2 rounded-full font-medium inline-block mb-4'>
            Export Best Quality Produce
          </span>

          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-snug mt-2 md:mt-4'>
            Tasty Organic <span className='text-green-500'>Fruits</span> & <span className='text-green-500'>Veggies</span> in Your City
          </h1>

          <p className='text-zinc-600 text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-lg md:max-w-xl'>
            Bred for a high content of beneficial nutrients, our produce is carefully selected to ensure maximum health benefits and superior taste. From farm to table, we prioritize freshness and quality, so you can enjoy wholesome, nutritious foods that support your well-being.
          </p>

          <div className='mt-6'>
            <Button content="Shop Now"/>
          </div>
        </div>

        {/* Hero image */}
        <div className='flex-1 flex justify-center md:justify-end'>
          <img 
            src={Grocery} 
            alt="Hero Image" 
            className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl'
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
