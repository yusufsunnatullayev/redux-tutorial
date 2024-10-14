import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from "../features/basketSlice";

function ProductCard({ product }) {
  const products = useSelector((state) => state.basket.basket);
  const { title, price, category, image, id } = product;
  const dispatch = useDispatch();

  const addProductHandler = () => {
    const newProduct = { ...product, amount: 1 };
    const hasInBasket = products.some((product) => product.id === id);
    if (hasInBasket) {
      dispatch(editProduct(id));
      return;
    }
    dispatch(addProduct(newProduct));
  };

  return (
    <div className="relative flex flex-col gap-4 p-6 h-[450px] rounded-md bg-gray-200 shadow">
      <img
        className="w-full h-52 object-cover object-top"
        src={image}
        alt={title}
      />
      <h1>{title}</h1>
      <h2>Category: {category}</h2>
      <div className="absolute flex items-center gap-24 w-full bottom-6 left-6">
        <span>Price: ${price}</span>
        <button
          onClick={addProductHandler}
          className="py-1 px-3 rounded-md bg-gray-600 text-white text-base font-semibold hover:bg-gray-500 duration-200"
        >
          Add to cart+
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
