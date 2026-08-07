import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [wishlistCount, setWishlistCount] = useState(0);

    // Sync wishlist count from localStorage
    useEffect(() => {
        const updateWishlistCount = () => {
            const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
            setWishlistCount(saved.length);
        };

        updateWishlistCount();
        window.addEventListener('storage', updateWishlistCount);
        return () => window.removeEventListener('storage', updateWishlistCount);
    }, []);

    // Reusable Navigation Links with Active Highlighting
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-primary font-bold bg-primary/10 rounded-xl'
                            : 'font-medium text-gray-700 hover:text-primary transition-colors'
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-primary font-bold bg-primary/10 rounded-xl'
                            : 'font-medium text-gray-700 hover:text-primary transition-colors'
                    }
                >
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/wishList"
                    className={({ isActive }) =>
                        `flex items-center gap-2 ${
                            isActive
                                ? 'text-primary font-bold bg-primary/10 rounded-xl'
                                : 'font-medium text-gray-700 hover:text-primary transition-colors'
                        }`
                    }
                >
                    Wishlist
                    {wishlistCount > 0 && (
                        <span className="badge badge-sm badge-primary rounded-full px-1.5 text-xs text-white">
                            {wishlistCount}
                        </span>
                    )}
                </NavLink>
            </li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
            <div className="max-w-7xl mx-auto navbar px-4 sm:px-6 lg:px-8">
                
                {/* Navbar Start: Mobile Menu Toggle & Brand Logo */}
                <div className="navbar-start flex items-center gap-2">
                    {/* Mobile Dropdown */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-md dropdown-content bg-white rounded-2xl z-50 mt-3 w-64 p-3 shadow-xl border border-gray-100 space-y-1">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Brand Logo */}
                    <Link to="/home" className="flex items-center gap-2 text-xl font-black tracking-tight text-gray-900 group">
                        <div className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center font-extrabold text-base shadow-md shadow-primary/30 group-hover:scale-105 transition-transform">
                            AB
                        </div>
                        <span className="hidden sm:inline-block">AB HOME</span>
                    </Link>
                </div>

                {/* Navbar Center: Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        {navLinks}
                    </ul>
                </div>

                {/* Navbar End: Search Bar & Actions */}
                <div className="navbar-end flex items-center gap-3">
                    
                    {/* Integrated Search Input */}
                    <div className="relative hidden md:block w-44 xl:w-60">
                        <input
                            type="text"
                            placeholder="Search items..."
                            className="input input-sm w-full bg-gray-100/80 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 rounded-full pl-9 pr-4 text-xs font-medium"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Quick Wishlist Icon */}
                    <Link to="/wishList" aria-label="View wishlist" className="btn btn-ghost btn-circle relative text-gray-700 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {wishlistCount > 0 && (
                            <span className="badge badge-xs badge-primary absolute top-2 right-2 w-2 h-2 p-0 rounded-full"></span>
                        )}
                    </Link>

                    {/* Primary CTA Button */}
                    <Link to="/products" className="btn btn-primary rounded-xl px-5 text-sm font-bold shadow-md shadow-primary/20 hover:shadow-primary/40 capitalize">
                        Visit Shop
                    </Link>

                </div>

            </div>
        </header>
    );
};

export default Navbar;