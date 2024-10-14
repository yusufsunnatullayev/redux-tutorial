import React from "react";
import { useAddCarMutation, useCarsQuery } from "../../services/carsApi";
import CarsCard from "../../components/CarsCard";
import { nanoid } from "@reduxjs/toolkit";

function Cars() {
  const { data } = useCarsQuery();
  const [addCar] = useAddCarMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const car = Object.fromEntries(form.entries());
    const carObj = { ...car, id: nanoid() };
    await addCar(carObj);
    e.target.reset();
  };

  return (
    <div className="w-full h-screen flex flex-col gap-20 items-center py-10 bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center gap-5"
      >
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="">Company</label>
          <input
            name="title"
            required
            className="py-1 px-3 rounded-md text-sm outline-none border"
            type="text"
            placeholder=""
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="">Model</label>
          <input
            name="model"
            required
            className="py-1 px-3 rounded-md text-sm outline-none border"
            type="text"
            placeholder=""
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="">Color</label>
          <input
            name="color"
            required
            className="py-1 px-3 rounded-md text-sm outline-none border"
            type="text"
            placeholder=""
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="">Price</label>
          <input
            name="price"
            required
            className="py-1 px-3 rounded-md text-sm outline-none border"
            type="number"
            placeholder="in usd"
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="">Image</label>
          <input
            name="img"
            required
            className="py-1 px-3 rounded-md text-sm outline-none border"
            type="text"
            placeholder="url"
          />
        </div>
        <button className="self-end py-1 px-3 rounded-md text-base font-semibold bg-blue-600 text-white hover:bg-blue-500 duration-200 ">
          Add
        </button>
      </form>
      <div className="grid grid-cols-3 gap-8 py-10">
        {data && data.map((car) => <CarsCard key={car.id} car={car} />)}
      </div>
    </div>
  );
}

export default Cars;
