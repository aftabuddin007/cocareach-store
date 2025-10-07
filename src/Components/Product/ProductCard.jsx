import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({pro}) => {
    const{name,image,price,category,id}=pro
    return (
        <div className="card bg-gray-200 border-1 p-3 shadow-sm rounded-md hover:scale-105 transition ease-in-out">
  <figure>
    <img className='h-[250px] w-[full] '
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p><span className='font-bold'> Category:</span>{category}</p>
    <p>Price: ${price}</p>
    <div className="card-actions justify-between">
      <Link className="btn btn-primary w-[45%]">WishList</Link>
      <Link to={`/product/${id}`} className="btn btn-primary w-[50%]">View Details</Link>
    </div>
  </div>
</div>
    );
};

export default ProductCard;