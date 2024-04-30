import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const youtubeApi = createApi({
    reducerPath: 'youtubeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/youtube',
    }),
    endpoints: (builder) => ({
        getVideoList: builder.query({
            query: (input) => {
                return {
                    url: `${YOUTUBE_BASE_URL}/search`,
                    params: {
                        q: input,
                        key: YOUTUBE_API_KEY,
                        type: 'video',
                        part: 'snippet',
                        maxResults: 6,
                    }
                };
            },
        }),
    }),
})

export const { useLazyGetVideoListQuery } = youtubeApi;