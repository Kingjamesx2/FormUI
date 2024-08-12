import { setFiles } from '../features/uploadSlice';
import { baseAPI } from "./baseAPI";

interface IUploadFileResponse {
  data?: {
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
          
          if (data?.data?.files) {
            dispatch(setFiles(data.data.files));
          } else {
            console.log("No content returned from server.");
          }
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const { useUploadFileMutation } = uploadFileAPI;
