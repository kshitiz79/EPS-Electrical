// ProductNservices.jsx
import data from '../../data/data.json';
import ProductSection from '../../components/ProductAndServices/ProductSection';

const ProductNservices = () => {
    
    return (
        <div className='min-h-screen w-full bg-[#f3f5f5]'>
            <ProductSection 
                title="Power Quality Solutions Products" 
                products={data.powerQualitySolutionsProducts} 
            />
            <ProductSection 
                title="Voltage Regulation Solution Products" 
                products={data.voltageRegulationSolutionProducts} 
            />
              <ProductSection 
                title="Voltage Regulation Solution Products" 
                products={data.evMobileSolution} 
            />
        </div>
    );
};

export default ProductNservices;
