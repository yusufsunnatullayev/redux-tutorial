import React from "react";
import { useDeleteCarMutation } from "../services/carsApi";
import { useNavigate } from "react-router";

function CarsCard({ car }) {
  const { title, model, price, img, id } = car;
  const [deleteCar] = useDeleteCarMutation();
  const navigate = useNavigate();
  const deleteHandler = async () => {
    await deleteCar(id);
    console.log(id);
  };

  const toCarDetail = () => {
    navigate(`/car-detail/${id}`);
  };

  return (
    <div className=" bg-gray-400 p-5 text-white rounded-md flex flex-col gap-4 items-start w-full">
      <img
        onClick={toCarDetail}
        className="w-[400px] h-[300px] object-cover rounded-md hover:opacity-80 cursor-pointer duration-200"
        src={img}
        alt=""
      />
      <h1 className="text-xl font-bold">{title}</h1>
      <h1 className="text-base font-semibold">Model: {model}</h1>
      <div className=" flex items-end justify-between w-full">
        <h1 className="font-semibold">${price}</h1>
        <button
          onClick={deleteHandler}
          className="py-1 px-3 rounded-md bg-red-500 text-white text-base font-semibold hover:bg-red-400 duration-150"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CarsCard;
