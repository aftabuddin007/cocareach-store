import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../Components/Product/ProductCard';

const Products = () => {
    const {products}=useProducts()

    return (
        <div>
            <div className='flex justify-between items-center py-4'>
                <h2 className='font-bold text-2xl'>All Products</h2>
                <button to='/products' className='btn font-semibold text-[17px]  bg-blue-300 hover:bg-blue-100'>Search</button>
            </div>
           <div className='grid grid-cols-3 gap-4'>
             {
                products.map(pro=>(<ProductCard key={pro.id} pro={pro}></ProductCard>))
            }
           </div>
        </div>
    );
};

export default Products;