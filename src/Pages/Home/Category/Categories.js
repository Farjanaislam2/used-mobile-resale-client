import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({product}) => {
    const {image,title} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Best Second Hand Phone </p>
    <div className="card-actions justify-end">
      <Link to={`/myProduct/:${product._id}`}>
      <button className="btn btn-success">See All Categories</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Categories;