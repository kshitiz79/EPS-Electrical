
import ProductCard from './ProductCard';

const ProductSection = ({ title, products }) => {
    return (
        <div className='w-full py-10'>
            <h1 className='text-4xl font-bold text-center text-blue-900 mb-12'>
                {title}
            </h1>
            <div className='flex flex-wrap justify-center gap-10 w-4/5 py-8 mx-auto'>
                {products?.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
};

export default ProductSection;
