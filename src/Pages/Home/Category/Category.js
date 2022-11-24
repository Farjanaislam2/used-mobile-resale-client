import React, { useEffect, useState } from 'react';
import Categories from './Categories';

const Category = () => {
    const [products, setProducts] = useState([]);
useEffect(()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setProducts(data))
} ,[])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
            {
                products.map(product => <Categories
                key={product._id}
                product={product}
                ></Categories>)
            }
        </div>
    );
};

export default Category;