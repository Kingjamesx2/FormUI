import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IDownloadState {
    formId: string;
    status: 'idle' | 'downloading' | 'completed' | 'failed';
}

const initialState: IDownloadState[] = [];

const downloadSlice = createSlice({
    name: 'download',
    initialState,
    reducers: {
        setDownloadState: (state, action: PayloadAction<IDownloadState>) => {
            const { formId, status } = action.payload;
            const existingDownload = state.find(download => download.formId === formId);

            if (existingDownload) {
                existingDownload.status = status;
            } else {
                state.push({ formId, status });
            }
        },
    }
});

export const { setDownloadState } = downloadSlice.actions;

export default downloadSlice.reducer;
