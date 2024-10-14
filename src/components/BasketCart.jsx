import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decreaseAmount,
  deleteProduct,
  increaseAmount,
} from "../features/basketSlice";

function BasketCart({ product }) {
  const { title, price, category, image, amount, id } = product;
  const dispatch = useDispatch();
  const [num, setNum] = useState(amount);
  const total = price * amount;

  const deleteHandler = () => {
    dispatch(deleteProduct(product));
  };

  const increaseAmountHandler = () => {
    setNum(num + 1);
    dispatch(increaseAmount(id));
  };

  const decreaseAmountHandler = () => {
    if (num <= 1) {
      return;
    }
    setNum(num - 1);
    dispatch(decreaseAmount(id));
  };

  return (
    <div className="flex items-center justify-between p-5 w-3/4 border rounded-md">
      <div className="flex items-center justify-between w-2/3">
        <div className="flex items-start justify-center gap-5">
          <img
            className="w-[100px] h-[90px] object-cover object-top "
            src={image}
            alt=""
          />
          <div className="w-[300px] flex flex-col gap-4">
            <h1 className="text-xl font-semibold ">{title}</h1>
            <span>Category: {category}</span>
          </div>
        </div>
        <div className="flex items-center justify-center px-5 py-3 gap-5 border rounded-md">
          <button onClick={decreaseAmountHandler} className="text-xl font-bold">
            -
          </button>
          <span>{num}</span>
          {/* <input
            type="number"
            className="bg-transparent outline-none w-5 no-arrows"
            defaultValue={num} // Changed from defaultValue to value
            // readOnly // Added readOnly to prevent manual input
          /> */}
          <button onClick={increaseAmountHandler} className="text-xl font-bold">
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start">
        <FaRegTrashAlt onClick={deleteHandler} className="cursor-pointer " />
        <span className="text-base font-bold">${total.toFixed(1)}</span>
      </div>
    </div>
  );
}

export default BasketCart;
