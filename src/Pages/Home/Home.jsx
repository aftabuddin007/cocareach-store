import React from 'react';
import { Link,  } from 'react-router';
import ProductCard from '../../Components/Product/ProductCard';
import useProducts from '../../Hooks/useProducts';

const Home = () => {
    // const products = useLoaderData()
    const {products,loading,error} =useProducts()
    
    const featuredProduct = products.slice(0,6)
    
    return (
        
        <div>
            <div className='flex justify-between items-center py-4'>
                <h2 className='font-bold text-2xl'>Feature Products</h2>
                <Link to='/products' className='btn font-semibold text-[17px]  bg-blue-300 hover:bg-blue-100'>See All Product</Link>
            </div>
           <div className='grid grid-cols-3 gap-4'>
             {
                featuredProduct.map(pro=>(<ProductCard key={pro.id} pro={pro}></ProductCard>))
            }
           </div>
        </div>
    );
};

export default Home;