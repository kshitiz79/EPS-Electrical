import { Link } from "react-router-dom";
import random from "/assets/random.png";

const ProductCard = ({ product }) => {
    return (
        <div className='bg-white shadow-md rounded-lg p-3 w-80 transition-transform transform hover:scale-105 hover:shadow-xl'>
            <img 
                className='w-full h-80 object-cover rounded-t-md' 
                src={product.imageUrl || random} 
                alt={product.name} 
            />
            <h2 className='text-center mt-4 text-lg font-semibold text-gray-800'>{product.name}</h2>
            <div className='flex items-center justify-around mt-5'>
            <Link to={`/product/${product.id}`}>
  <button className='bg-blue-700 hover:bg-blue-800 p-2 rounded-md text-white px-6'>
    View More
  </button>
</Link>

                <Link to="/contact">
        <button className='bg-green-600 hover:bg-green-700 p-2 rounded-md text-white px-6'>
          Contact Us
        </button>
      </Link>
            </div>
        </div>
    );
};

export default ProductCard;
