import { IWeatherForecast } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_OPENWEATHER_BASE_URL,
    }),
    reducerPath: 'weatherApi',
    tagTypes: ['Weather'],
    endpoints: build => ({
        getCurrentWeatherData: build.query<IWeatherForecast, { lat: number; lon: number }>({
            query: ({ lat, lon }) => {
                const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
                return `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
            },
            providesTags: (result, _error, { lat, lon }) => [
                { type: 'Weather', id: `${lat}${lon}` },
            ],
        }),
    }),
})

export const { useGetCurrentWeatherDataQuery } = weatherApiSlice
