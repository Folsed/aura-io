import { IUvIndex } from '@/types/uvIndex'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const uvApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_OPENMETEO_BASE_URL,
    }),
    reducerPath: 'uvApi',
    tagTypes: ['UV'],
    endpoints: build => ({
        getUVIndexData: build.query<IUvIndex, { lat: number; lon: number }>({
            query: ({ lat, lon }) => {
                return `forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&hourly=temperature_2m`
            },
            providesTags: (result, _error, { lat, lon }) => [{ type: 'UV', id: `${lat}${lon}` }],
        }),
    }),
})

export const { useGetUVIndexDataQuery } = uvApiSlice
