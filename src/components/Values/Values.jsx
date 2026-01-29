import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling } from 'react-icons/fa6'
import { FaShieldAlt } from 'react-icons/fa'

const values = [
  {
    id: 1,
    title: "Quality Products",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: FaHeart,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: FaLeaf,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: FaShieldAlt,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: FaSeedling,
  },
]

const Values = () => {
  return (
    <section className="max-w-\[1400px] mx-auto px-10 py-20">

      <Heading highlight="Our" heading="Values" />

      {/* Values Cards */}
      <div className="grid md:grid-cols-4 gap-8 mt-12">

        {values.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="text-green-500 text-4xl flex justify-center">
                <Icon />
              </div>

              <h3 className="text-xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.para}
              </p>
            </div>
          )
        })}

      </div>

    </section>
  )
}

export default Values
