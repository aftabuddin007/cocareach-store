import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// Assuming useProducts is in this path
import useProducts from '../../Hooks/useProducts'; 

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const [isAdded, setIsAdded] = useState(false);

    // Find the product
    const product = products?.find(p => String(p.id) === id);

    // Check if it's already in the wishlist on component mount
    useEffect(() => {
        if (product) {
            const existingList = JSON.parse(localStorage.getItem('wishlist')) || [];
            const isDuplicated = existingList.some(p => p.id === product.id);
            if (isDuplicated) setIsAdded(true);
        }
    }, [product]);

    // Handle early return if product is not yet loaded or not found
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    const { name, image, price, category, description, stock } = product;
    
    const handleAddToWish = () => {
        const existingList = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        const isDuplicated = existingList.some(p => p.id === product.id);
        
        if (isDuplicated) {
            // Already added, no need to alert, the button UI will reflect this
            return;
        }
        
        const updatedList = [...existingList, product];
        localStorage.setItem('wishlist', JSON.stringify(updatedList));
        setIsAdded(true); // Update UI state
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    
                    {/* Left Column: Image Section */}
                    <div className="md:w-1/2 bg-gray-100 p-8 flex items-center justify-center relative">
                        {/* Category Badge */}
                        <span className="absolute top-6 left-6 px-4 py-1 bg-white text-gray-800 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                            {category}
                        </span>
                        
                        <img 
                            src={image} 
                            alt={name} 
                            className="object-contain max-h-[500px] hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                        />
                    </div>

                    {/* Right Column: Details Section */}
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                            {name}
                        </h1>
                        
                        <div className="text-3xl font-bold text-primary mb-6">
                            ${price}
                        </div>

                        <div className="prose prose-sm sm:prose text-gray-600 mb-8">
                            <p>{description}</p>
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center space-x-2 mb-8">
                            <div className={`w-3 h-3 rounded-full ${stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className="text-sm font-medium text-gray-700">
                                {stock > 0 ? `${stock} in stock - Ready to ship` : 'Out of stock'}
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                className="btn btn-primary flex-1 h-14 text-lg rounded-xl shadow-lg shadow-primary/30"
                                disabled={stock === 0}
                            >
                                Add to Cart
                            </button>
                            
                            <button 
                                onClick={handleAddToWish} 
                                disabled={isAdded}
                                className={`btn h-14 text-lg rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                                    isAdded 
                                    ? 'bg-red-50 text-red-500 border-red-200 cursor-not-allowed' 
                                    : 'btn-outline border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                                }`}
                            >
                                {/* Heart SVG Icon */}
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill={isAdded ? "currentColor" : "none"} 
                                    stroke="currentColor" 
                                    className="w-6 h-6"
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                                {isAdded ? 'Saved to Wishlist' : 'Add to Wishlist'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;