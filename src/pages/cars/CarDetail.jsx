import React from "react";
import { useParams } from "react-router";
import { useCarDetailQuery } from "../../services/carsApi";

function CarDetail() {
  const { id } = useParams();
  const { data, error, isLoading } = useCarDetailQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading car details</div>;
  }

  const { title, img, price, color, model } = data;

  return (
    <div className="w-full h-screen p-10 flex flex-col items-start gap-5">
      <img className="w-[500px] h-[300px] object-cover" src={img} alt="" />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <h1 className="text-xl font-semibold">Model: {model}</h1>
      <h1 className="text-base font-bold">
        Color: <span className={`text-${color}-700`}>{color}</span>
      </h1>
      <span className="text-base font-semibold">${price}</span>
    </div>
  );
}

export default CarDetail;
