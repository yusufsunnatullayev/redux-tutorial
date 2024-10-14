import React from "react";
import { useSelector } from "react-redux";
import BasketCart from "../../components/BasketCart";

function Basket() {
  const products = useSelector((state) => state.basket.basket);
  const basket = useSelector((state) => state.basket.basket);

  const total = products.reduce(
    (acc, curr) => acc + curr.amount * curr.price,
    0
  );

  return (
    <div className="flex flex-col gap-5 items-start p-10 w-full">
      <h1 className="text-xl font-bold">Total: ${total.toFixed(1)} </h1>
      {basket.map((product) => (
        <BasketCart key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Basket;
