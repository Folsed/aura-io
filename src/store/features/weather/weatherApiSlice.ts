import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IWeatherForecast {
    list: Array<{ dt: number; main: { temp: number } }>
}

export const weatherApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_OPENWEATHER_BASE_URL,
        prepareHeaders: headers => {
            const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

            apiKey && headers.set('x-api-key', apiKey)
        },
    }),
    reducerPath: 'weatherApi',
    tagTypes: ['Weather'],
    endpoints: build => ({
        getCurrentWeatherData: build.query<IWeatherForecast, { lat: number; lon: number }>({
            query: ({ lat, lon }) => {
                console.log(lat, lon)
                return `data/2.5/weather?lat=${lat}&lon=${lon}&appid=c41c895583269ecfbf16e1a37ff5cec0`
            },
            providesTags: (result, _error, { lat, lon }) =>
                result
                    ? [{ type: 'Weather' as const, id: `${lat},${lon}` }]
                    : [{ type: 'Weather' as const, id: 'UNKNOWN' }],
        }),
    }),
})

export const { useGetCurrentWeatherDataQuery } = weatherApiSlice
