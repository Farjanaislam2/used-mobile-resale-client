import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';

const MyProducts = () => {
    const products = useLoaderData();
    
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
            {
products.map(product => <CategoryProduct
key = {product._id}
product={product}
></CategoryProduct>)
            }
        </div>                                                                                                                                                          
    );
};

export default MyProducts;