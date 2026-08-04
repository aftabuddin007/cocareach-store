import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const WishList = () => {
    const [wishlist, setWishList] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    // Load data on mount
    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('wishlist'));
        if (saveList) setWishList(saveList);
    }, []);

    // Handle item removal
    const handleRemove = (id) => {
        const existingList = JSON.parse(localStorage.getItem('wishlist')) || [];
        const updatedList = existingList.filter(p => p.id !== id);
        
        setWishList(updatedList);
        localStorage.setItem('wishlist', JSON.stringify(updatedList));
    };

    // Derived state for sorting
    const sortedItems = (() => {
        if (sortOrder === 'price-asc') {
            return [...wishlist].sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'price-desc') {
            return [...wishlist].sort((a, b) => b.price - a.price);
        }
        return wishlist;
    })();

    // ----------------------------------------
    // EMPTY STATE UI
    // ----------------------------------------
    if (!wishlist.length) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="bg-white p-10 rounded-3xl shadow-sm text-center max-w-md w-full">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h2>
                    <p className="text-gray-500 mb-6">Looks like you haven't added anything to your wishlist yet.</p>
                    <button className="btn btn-primary w-full rounded-xl">Continue Shopping</button>
                </div>
            </div>
        );
    }

    // ----------------------------------------
    // MAIN UI
    // ----------------------------------------
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900">My Wishlist</h1>
                        <p className="text-gray-500 mt-1">You have {sortedItems.length} items saved</p>
                    </div>
                    
                    <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center">
                        <label className="text-sm text-gray-500 font-medium px-3 whitespace-nowrap">Sort by:</label>
                        <select 
                            value={sortOrder} 
                            onChange={e => setSortOrder(e.target.value)}
                            className="select select-sm border-none bg-gray-50 focus:outline-none rounded-lg text-gray-700 font-medium cursor-pointer"
                        >
                            <option value="none">Default</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Items List (Takes up 2/3 of space on desktop) */}
                    <div className="lg:col-span-2 space-y-4">
                        {sortedItems.map(p => (
                            <div 
                                key={p.id} 
                                className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow gap-6"
                            >
                                <div className="flex items-center gap-5 w-full sm:w-auto">
                                    <div className="w-24 h-24 shrink-0 bg-gray-50 rounded-xl overflow-hidden p-2 flex items-center justify-center">
                                        <img className="max-h-full max-w-full object-contain" src={p.image} alt={p.name} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{p.name}</h3>
                                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mt-2 uppercase tracking-wide">
                                            {p.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8 border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-100">
                                    <p className="text-2xl font-bold text-primary">${p.price}</p>
                                    <button 
                                        onClick={() => handleRemove(p.id)} 
                                        className="p-3 text-red-500 bg-red-50 hover:bg-red-500 hover:text-white rounded-xl transition-colors duration-200"
                                        title="Remove from wishlist"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Chart Summary (Takes up 1/3 of space on desktop) */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Price Analysis
                            </h3>
                            
                            <div className="h-72 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={wishlist} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                        {/* Changed dataKey to 'name' so individual items are clear on the chart */}
                                        <XAxis 
                                            dataKey="name" 
                                            tick={{fontSize: 10, fill: '#6B7280'}} 
                                            tickFormatter={(val) => val.length > 8 ? val.substring(0, 8) + '...' : val}
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <YAxis 
                                            tick={{fontSize: 12, fill: '#6B7280'}}
                                            axisLine={false}
                                            tickLine={false}
                                            tickFormatter={(val) => `$${val}`}
                                        />
                                        <Tooltip 
                                            cursor={{fill: '#F3F4F6'}}
                                            contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                                        />
                                        <Legend wrapperStyle={{paddingTop: '20px'}} />
                                        <Bar dataKey="price" name="Price ($)" fill="#4F46E5" radius={[4, 4, 0, 0]} barSize={32} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <div className="flex justify-between items-center text-lg">
                                    <span className="font-semibold text-gray-600">Total Value:</span>
                                    <span className="font-bold text-gray-900">
                                        ${wishlist.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WishList;