import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [myProducts, setmyProducts] = useState([]);
  console.log(myProducts)
  useEffect(()=>{
      fetch('http://localhost:5000/categories')
      .then(res=> res.json())
      .then(data => setmyProducts(data))
  } ,[])

    return (
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14' >
          {
          myProducts.map(myProduct =>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={myProduct.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{myProduct.title}</h2>
    <p>Best Second Hand Phone </p>
    <div className="card-actions justify-end">
      <Link to={`/category/${myProduct._id}`}>
      <button className="btn btn-success">See All Categories</button>
      </Link>
    </div>
  </div>
</div>
          )
        }
      </div>
    );
};

export default Categories;