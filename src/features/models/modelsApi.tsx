import { apiSlice } from '../api/apiSlice';
import { models } from '@/mockData/models';

export const modelsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModels: builder.query<any, void>({
      query: () => `/users`,
      transformResponse(apiResponse) {
        console.log('apiResponse', apiResponse);
        return models;
      },
    }),
    getModelsById: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetModelsQuery } = modelsApi;
