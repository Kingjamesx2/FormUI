import { baseAPI } from "./baseAPI";
import { setDownloadState } from '../../store/features/downloadSlice';

export const downloadAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        downloadForm: builder.query({
            query: ({ fileType, fileName }: { fileType: string; fileName: string }) => ({
                url: `/getFile/${fileType}/${fileName}`,
                method: 'GET',
                responseHandler: 'blob', // Important for handling binary data
            }),
            async onQueryStarted({ fileType, fileName }, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    // Create a URL for the blob and initiate the download
                    const url = window.URL.createObjectURL(new Blob([data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `${fileName}`);
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    window.URL.revokeObjectURL(url);

                    dispatch(setDownloadState({ formId: fileName, status: 'completed' }));
                } catch (e) {
                    console.error(e);
                }
            }
        })
    })
});

export const {
    useDownloadFormQuery
} = downloadAPI;
