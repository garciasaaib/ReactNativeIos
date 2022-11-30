import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const baseUrl: string = 'https://rickandmortyapi.com/api';

export const rickMortyApi = createApi({
  reducerPath: 'rickMortyInfo',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: builder => ({
    // get number of total chars
    getRickMortyMaxAmount: builder.query({
      query: () => '/character',
    }),

    // get chars from ids
    getRickMortyChars: builder.query({
      query: ids => `/character/${ids}`,
    }),
  }),
});

export const {useGetRickMortyMaxAmountQuery, useGetRickMortyCharsQuery} =
  rickMortyApi;
