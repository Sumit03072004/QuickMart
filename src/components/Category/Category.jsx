import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import { Link } from 'react-router-dom'

const category = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    description: "Fresh and organic produce from local farms",
    image: FruitsCat,
    path: '/fruits',
  },
  {
    id: 2,
    title: "Meat & Seafood",
    description: "High-quality meat and seafood products for your meals",
    image: SeaFoodCat,
    path: '/seafood',
  },
  {
    id: 3,
    title: "Dairy & Eggs",
    description: "Whole and organic dairy products from local farms",
    image: DairyCat,
    path: '/dairy',
  },
]

const Category = () => {
  return (
    <section>
      <div className='py-20 flex-1 basis-\[300px]'>

        <Heading highlight="Shop" heading="by Category" />

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 px-6">
          {category.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-32 mx-auto"
              />

              <h3 className="text-xl font-bold mt-6">
                {card.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {card.description}
              </p>

              <div className="mt-5">
                <Link to={card.path} className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300">See All</Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Category
