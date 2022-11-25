import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery} from '@tanstack/react-query'
import { Result } from 'postcss';
import Loading from './../Shared/Loading/Loading';


const Categories = () => {
  // const [myProducts, setmyProducts] = useState([]);
  


const {data : myProducts =[],isLoading } = useQuery({
  queryKey: ["categories"],
  queryFn: async() =>{
    const res =await  fetch("http://localhost:5000/categories");
    const data = await res.json();
    return data
  }
})

if(isLoading){
  return <Loading></Loading>
}

  // useEffect(() => {
  //   fetch("http://localhost:5000/categories")
  //     .then((res) => res.json())
  //     .then((data) => setmyProducts(data));
  // }, []);

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
      {myProducts.map((myProduct) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={myProduct.image} alt="Shoes" />
          </figure>
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
      ))}
    </div>
  );
};

export default Categories;
