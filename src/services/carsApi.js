import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../constants";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),
  tagTypes: ["Cars"],
  endpoints: (builder) => ({
    cars: builder.query({
      query: () => "/cars",
      providesTags: ["Cars"],
    }),
    carDetail: builder.query({
      query: (id) => `/cars/${id}`,
      providesTags: ["Cars"],
    }),
    addCar: builder.mutation({
      query: (car) => ({
        url: "/cars",
        method: "POST",
        body: car,
      }),
      invalidatesTags: ["Cars"],
    }),
    updateCar: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/cars/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Cars"],
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cars"],
    }),
  }),
});

export const {
  useCarsQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useCarDetailQuery,
} = carsApi;
