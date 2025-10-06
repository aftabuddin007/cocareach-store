import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';
import Home from '../Pages/Home/Home';

const Root = () => {
    return (
        <div className='flex flex-col max-w-7xl mx-auto' >
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;