import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/fruits-banner.jpg';

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits and Veggies" bgImage={BgFruits} categories={['Fruits']}/>
    </div>
  )
}

export default Fruits
