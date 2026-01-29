import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 relative hover:shadow-lg transition">

      {/* Top Icons */}
      <div className="absolute top-4 right-4 flex gap-3">
        <span className="text-gray-400 hover:text-red-500 cursor-pointer">
          <FaHeart />
        </span>
        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
          <FaPlus />
        </button>
      </div>

      {/* Product Image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-green-600 font-bold mt-1">₹{price}</p>

        <div className="mt-4">
          <Button content="Add to Cart" />
        </div>
      </div>
    </div>
  )
}

export default Cards
