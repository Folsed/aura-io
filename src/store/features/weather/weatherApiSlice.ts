import { IAirPollution, IDailyForecast, IWeatherForecast } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

export const weatherApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_OPENWEATHER_BASE_URL,
    }),
    reducerPath: 'weatherApi',
    tagTypes: ['Weather', 'AirPollution', 'DailyForecast'],
    endpoints: build => ({
        getCurrentWeatherData: build.query<IWeatherForecast, { lat: number; lon: number }>({
            query: ({ lat, lon }) => {
                return `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            },
            providesTags: (result, _error, { lat, lon }) => [
                { type: 'Weather', id: `${lat}${lon}` },
            ],
        }),
        getAirPollutionData: build.query<IAirPollution, { lat: number; lon: number }>({
            query: ({ lat, lon }) => {
                return `data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            },
            providesTags: (result, _error, { lat, lon }) => [
                { type: 'AirPollution', id: `${lat}${lon}` },
            ],
        }),
        getDailyForecastData: build.query<IDailyForecast, { lat: number; lon: number }>({
            query: ({ lat, lon }) => {
                return `data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            },
            providesTags: (result, _error, { lat, lon }) => [
                { type: 'DailyForecast', id: `${lat}${lon}` },
            ],
        }),
    }),
})

export const { useGetCurrentWeatherDataQuery, useGetAirPollutionDataQuery, useGetDailyForecastDataQuery } = weatherApiSlice
