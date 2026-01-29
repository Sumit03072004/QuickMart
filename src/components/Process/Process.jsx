import React from 'react'
import Heading from '../Heading/Heading'
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb"
import { PiPlantFill, PiPlant } from "react-icons/pi"
import { SlBadge } from "react-icons/sl"
import { BsLightningChargeFill } from "react-icons/bs"

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: 'Sourcing',
    para: 'We source fresh and organic products directly from trusted farms.',
    icon: <PiPlantFill />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: 'Manufacturing',
    para: 'Products are processed and packed with modern techniques.',
    icon: <PiPlant />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: 'Quality Control',
    para: 'Strict quality checks ensure best products reach you.',
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: 'Fast Delivery',
    para: 'Quick and safe delivery to your doorstep.',
    icon: <BsLightningChargeFill />,
  },
]

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-\[1400px] mx-auto px-5 md:px-10">

        <div className="mb-14">
          <Heading highlight="Our" heading="Process" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map(item => (
            <div
              key={item.id}
              className="
                relative bg-white p-8 rounded-2xl
                shadow-md hover:shadow-xl
                transition group
              "
            >
              {/* Number */}
              <div className="absolute -top-6 -left-6 text-green-600 text-6xl">
                {item.number}
              </div>

              {/* Icon */}
              <div className="text-green-600 text-4xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-zinc-800 mb-3">
                {item.title}
              </h3>

              <p className="text-zinc-600 text-sm leading-relaxed">
                {item.para}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Process
