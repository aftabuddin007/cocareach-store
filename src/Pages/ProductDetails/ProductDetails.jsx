import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Hooks/useProducts';

const ProductDetails = () => {
    const {id} =useParams()
   const {products} = useProducts()
   const product = products.find(p=> String(p.id)===id)

    const{name,image,price,category,description,stock}=product || {}
    
    const handleAddToWish = ()=>{
        const existingList = localStorage.getItem('wishlist')
        console.log(JSON.parse(existingList))
        // localStorage.setItem('wishlist',JSON.stringify(product))
    }


    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10 h-[250px]">
    <img 
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>{price}</p>
    <p>{category}</p>
    <p>{stock}</p>
    <div className="card-actions">
      <button onClick={()=>handleAddToWish()} className="btn btn-primary">WishList</button>
    </div>
  </div>
</div>
    );
};

export default ProductDetails;