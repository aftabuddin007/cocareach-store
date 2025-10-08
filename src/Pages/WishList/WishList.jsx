import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const WishList = () => {
    const [wishlist,setWishList]=useState([])
    const [sortOrder,setSortOrder]=useState('none')

    useEffect(()=>{
        const saveList = JSON.parse(localStorage.getItem('wishlist'))
        if(saveList)setWishList(saveList)


    },[])

    const sortedItem = (()=>{
        if(sortOrder === 'price-asc'){
          return   [...wishlist].sort((a,b)=>a.price -b.price)
        }else if (sortOrder === 'price-desc'

        ){
         return   [...wishlist].sort((a,b)=>b.price -a.price)   
        }else{
          return   wishlist
        }
    } )()
    const handleRemove = id=>{
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        
      let updatedList = existingList.filter(p=>p.id !== id)
        // for ui update prev=>prev.filter(p=>p.id!==id)
        setWishList(updatedList)

        localStorage.setItem('wishlist',JSON.stringify(updatedList))
    }
    
    
    return (

        <div>
            <div className='flex justify-between'>
            <p>{sortedItem.length}</p>
            <div>
                <label>
<select value ={sortOrder} onChange={e=>setSortOrder(e.target.value)}defaultValue="Small" className="select select-sm">
  <option disabled={true}>Sort</option>
  <option value='none'>sort by price</option>
  <option value='price-asc'>low-&gt; high</option>
  <option value='price-desc'>high-&gt; low</option>
</select>
                </label>
            </div>
            </div>
            

            
                <div>
            {
                sortedItem.map(p=>(<div className='flex justify-between px-10 items-center border-2 mb-3'>
                <div className=' flex gap-4'>
                <img className='h-[100px]' src={p.image} alt="" />
                <div>
                    <p>{p.name}</p>
                <p>{p.category}</p>
                </div>

                </div>
                <div className='flex gap-10'>
                    <p>${p.price}</p>
                    <button onClick={()=>handleRemove(p.id)} className='btn'>x</button>
                </div></div>))
            }

                </div>
                {/* chart */}
                <div className='space-y-3'>
                    <h3 className='text-xl font-bold'>wishList Summary</h3>
                    <div className='bg-base-100 border rounded-xl p-4 h-80'>
                        <ResponsiveContainer width="100%" height="100%">
      <BarChart data={wishlist}>
        
     
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        
        <YAxis />
        <Tooltip />
        <legend />
        <Bar dataKey="price"  fill="#8884d8"  />
        
      </BarChart>
    </ResponsiveContainer>
  

                    </div>



                </div>
        </div>
            
        
    );
};

export default WishList;

