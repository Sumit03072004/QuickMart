import React, { useState } from "react";
import Heading from "../Heading/Heading";
import products from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Bakery",
    "Meat",
    "Beverages",
  ];
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <section>
      <div className="max-w-\[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 text-lg font-medium rounded-full transition
                ${
                  activeTab === category
                    ? "bg-green-600 text-white"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {filteredProducts.slice(0, 8).map((product) => (
            <Cards
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <div className="mt-5">
                <Link to="/allproducts" className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300">See All</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
