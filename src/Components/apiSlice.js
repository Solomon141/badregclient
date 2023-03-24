import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3010/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
        query: () => "user/usersWithRole",
    }),
    // getProduct: builder.query({
    //     query: (product) => `products/search?q=${product}`,
    // }),
    userLoginQuery: builder.mutation ({
        query: (user) => ({
            url: 'user/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        } )
    })
  })
});

export const { useGetAllProductsQuery, useUserLoginQueryMutation } = productsApi;
