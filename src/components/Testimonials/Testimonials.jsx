import React from "react";
import Heading from "../Heading/Heading";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* Customer Images */
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    rating: 5,
    image: Customer1,
    message:
      "QuickMart has completely changed my grocery shopping experience. Fresh products, fast delivery, and amazing service!",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Home Maker",
    rating: 4,
    image: Customer2,
    message:
      "Fresh groceries every time. The quality and packaging are excellent. Highly recommended!",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    rating: 5,
    image: Customer3,
    message:
      "Super convenient and reliable. I order weekly and never had a bad experience.",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Nutritionist",
    rating: 5,
    image: Customer4,
    message:
      "Best grocery platform for healthy and organic products. Love the variety!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="max-w-\[1400px] mx-auto px-5 md:px-10 py-20">
        <Heading highlight="Customer" heading="Saying" />

        <div className="relative mt-14 max-w-3xl mx-auto">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-zinc-100 rounded-2xl p-8 md:p-10 shadow-md text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-green-500"
                  />

                  <h5 className="text-xl font-semibold mt-4">{item.name}</h5>
                  <p className="text-zinc-500 text-sm">{item.role}</p>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mt-2 text-green-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-zinc-600 mt-6 leading-relaxed">
                    “{item.message}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrow Styles */}
          <div className="swiper-button-prev text-green-500 !left-\[-25px]"></div>
          <div className="swiper-button-next text-green-500 !right-\[-25px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
