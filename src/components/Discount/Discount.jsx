import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section
      className="relative bg-green-200 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-white/95
          via-white/85
          to-white/60
          md:from-white/80
          md:via-white/60
          md:to-transparent
        "
      ></div>

      <div className="relative max-w-\[1400px] mx-auto px-5 md:px-10 py-14 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">

          {/* Discount */}
          <span className="text-5xl md:text-9xl font-extrabold text-green-600 md:-rotate-90">
            20%
          </span>

          {/* Content */}
          <div className="max-w-\[700px] text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-zinc-800">
              First Order <span className="text-green-600">Discount</span>
            </h3>

            <p className="text-zinc-600 mt-4 md:mt-6 mb-6 md:mb-8 text-base md:text-lg">
              Enjoy an exclusive first order discount on our grocery website.
              Use code <span className="font-semibold text-green-600">FIRST20</span>
              to save 20%.
            </p>

            <Button content="Get a Discount" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Discount
