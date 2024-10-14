import React from "react";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-7 p-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
