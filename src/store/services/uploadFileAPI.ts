// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';
import { setFiles, clearFiles } from '../features/uploadSlice';
import { baseAPI } from "./baseAPI";


interface IUploadFileResponse {
  data: {
    files: File[];
    message: string;
  };
}

export const uploadFileAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation<IUploadFileResponse, FormData>({
      query: (body) => ({
        url: '/uploadPhoto',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data;'
        },
        body,
        formData: true,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setFiles(data.data.files));
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const { useUploadFileMutation } = uploadFileAPI;