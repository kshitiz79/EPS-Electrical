import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "De Tuned Reactor -LV/MV",
    image: "./ProductRange/popular1.jpg",
  },
  {
    name: "Acitve Harmonic Filter",
    image: "./ProductRange/popular2.jpg",
  },
  // {
  //   name: "EV Charger",
  //   image: "./ProductRange/popular3.png",
  // },
  {
    name: "Hybrid Panel - APFC + AHF + SVG",
    image: "./ProductRange/popular4.png",
  },
  {
    name: "Servo Stabilizers",
    image: "./ProductRange/popular5.png",
  },
  {
    name: "Static VAR Generator - SVG",
    image: "./ProductRange/popular6.png",
  },
  {
    name: "Subodhan Make LV/MV Capacitors - MPP/ABB",
    image: "./ProductRange/popular7.png",
  },
  {
    name: "600 VA to 4.8 MW UPS Range",
    image: "./../../ProductRange/popular8.png",
  },
];

const ProductRange = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Product Range</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg overflow-hidden ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <h3 className="text-lg font-semibold text-center mt-6">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">

      <Link to="/productandservices">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
          View All Products & Services
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductRange;
