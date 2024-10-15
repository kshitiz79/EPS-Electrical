import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import ContactForm from '../../components/ContactForm/ContactForm';
import SpecificationsTable from './SpecificationTable';

const SingleProductPage = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
  
    // Fetch product by ID from the data
    useEffect(() => {
      const productId = parseInt(id); // Convert id to a number
      // Search for the product in all categories
      const foundProduct =
        data.evMobileSolution.find(p => p.id === productId) ||
        data.powerQualitySolutionsProducts.find(p => p.id === productId) ||
        data.voltageRegulationSolutionProducts.find(p => p.id === productId);
  
      setProduct(foundProduct);
    }, [id]);
  
    // If no product is found, show a message
    if (!product) return <h2 className="text-center text-xl font-semibold mt-10">Product Not Found</h2>;
  
    return (
      <>
        {/* Product Information */}
        <div className="flex flex-col lg:flex-row lg:ml-36 p-5">
          {/* Product Image */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-96 h-auto rounded-lg shadow-md mb-8 lg:mb-0"
          />
  
          {/* Product Details */}
          <div className="lg:ml-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
  
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg mb-6">
              Get Best Price
            </button>
  
            <div className="mt-4">
              <h3 className="text-lg">
                <strong>Business Type:</strong> Manufacturer, Exporter, Supplier
              </h3>
              <h4 className="text-lg mt-2">
                <strong>Preferred Buyer From:</strong> Anywhere in India
              </h4>
  
              <div className="mt-6 space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
                  Request to Call
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Conditionally Render Features and Benefits */}
        {product.features && (
          <div className="p-8 ml-32">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-lg">{feature}</li>
              ))}
            </ul>
          </div>
        )}
  
        {product.benefits && (
          <div className="p-8 ml-32">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="text-lg">{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        
  <div className="p-5 px-40">
      
        {product.specifications && <SpecificationsTable specifications={product.specifications} />}
      </div>
        {/* Contact Section */}
        <section className="mt-10">
          <h1 className="text-center font-bold text-3xl mb-8">
            Looking for {product.name}?
          </h1>
          <ContactForm productName={product.name} />
        </section>
      </>
    );
  };
  
  export default SingleProductPage;