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
    uploadFile: builder.mutation({
      query: (formData) => ({
        url: '/uploadPhoto',
        method: 'POST',
        headers: {
          "content-type": "multipart/form-data"
        },
        body: formData,
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
