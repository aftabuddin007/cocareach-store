import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const ProductCard = ({ pro }) => {
    const { name, image, price, category, id } = pro || {};
    const [isWishlisted, setIsWishlisted] = useState(false);

    // Sync wishlist state with LocalStorage on mount
    useEffect(() => {
        if (!id) return;
        const existingList = JSON.parse(localStorage.getItem('wishlist')) || [];
        setIsWishlisted(existingList.some(item => item.id === id));
    }, [id]);

    // Handle interactive wishlist toggle directly on card
    const toggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const existingList = JSON.parse(localStorage.getItem('wishlist')) || [];
        let updatedList;

        if (isWishlisted) {
            updatedList = existingList.filter(item => item.id !== id);
            setIsWishlisted(false);
        } else {
            updatedList = [...existingList, pro];
            setIsWishlisted(true);
        }

        localStorage.setItem('wishlist', JSON.stringify(updatedList));
    };

    return (
        <div className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
            
            {/* Top Image Section */}
            <div className="relative w-full h-64 bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-white/90 backdrop-blur-md text-[11px] font-bold text-gray-700 rounded-full shadow-xs border border-gray-100 uppercase tracking-wider">
                    {category}
                </span>

                {/* Interactive Wishlist Heart Button */}
                <button
                    onClick={toggleWishlist}
                    aria-label="Add to wishlist"
                    className={`absolute top-3 right-3 z-10 p-2.5 rounded-full transition-all duration-300 shadow-sm ${
                        isWishlisted
                            ? 'bg-red-50 text-red-500 scale-110'
                            : 'bg-white/80 text-gray-400 hover:text-red-500 hover:bg-white backdrop-blur-md'
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={isWishlisted ? "currentColor" : "none"}
                        stroke="currentColor"
                        className="w-5 h-5 transition-transform active:scale-125"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </button>

                {/* Image with Subtle Hover Scale Effect */}
                <img
                    src={image}
                    alt={name}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
            </div>

            {/* Bottom Card Body */}
            <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                <div>
                    <h3 className="text-base font-bold text-gray-800 line-clamp-1 group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                    <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-2xl font-extrabold text-gray-900">${price}</span>
                    </div>
                </div>

                {/* Primary Action Button */}
                <div className="mt-4">
                    <Link
                        to={`/product/${id}`}
                        className="btn btn-primary w-full h-11 min-h-0 rounded-xl shadow-md shadow-primary/20 hover:shadow-primary/40 text-sm font-semibold tracking-wide capitalize"
                    >
                        View Details
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;