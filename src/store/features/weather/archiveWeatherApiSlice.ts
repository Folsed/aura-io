import { IArchiveWeather, IDayTemp } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const archiveWeatherApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_OPENMETEO_BASE_URL,
    }),
    reducerPath: 'archiveWeatherApi',
    tagTypes: ['ArchiveWeather'],
    endpoints: build => ({
        getArchiveWeatherData: build.query<IDayTemp[], { lat: number; lon: number }>({
            query: ({ lat, lon }) => {
                return `forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&past_days=7`
            },
            transformResponse: (res: IArchiveWeather): IDayTemp[] => {
                const { time, temperature_2m } = res.hourly
                const len = Math.min(time.length, temperature_2m.length)
                const out: IDayTemp[] = new Array(len)
                for (let i = 0; i < len; i++) {
                    out[i] = { day: time[i], temp: temperature_2m[i] }
                }
                return out
            },
            providesTags: (result, _error, { lat, lon }) => [
                { type: 'ArchiveWeather', id: `${lat}${lon}` },
            ],
        }),
    }),
})

export const { useGetArchiveWeatherDataQuery } = archiveWeatherApiSlice
