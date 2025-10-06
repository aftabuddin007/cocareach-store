import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../Components/Product/ProductCard';

const Products = () => {
    const [search,setSearch]=useState('')
    const {products}=useProducts()

    return (
        <div>
            <div className='flex justify-between items-center py-4'>
                <h2 className='font-bold text-2xl'>All Products <span className='text-sm text-gray-500'>({products.length}) product found</span></h2>
                <label className="input">
  
  <input onChange={()=>setSearch()} type="search" placeholder="Search Products" />
</label>
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