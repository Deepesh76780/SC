import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Products from "../data/Productlist.json";

const AllProduct = () => {
  console.log(Products);
  return (
    <div>
      <h1 className="text-center">Products-List</h1>
      <div className="container d-flex flex-row mt-5 gap-5 flex-wrap justify-content-center">
        {Products.map((item, key) => {
          return <ProductCard key={key} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AllProduct;
