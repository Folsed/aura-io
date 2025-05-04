'use client'

import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetArchiveWeatherDataQuery } from '@/store/features/weather/archiveWeatherApiSlice'
import { useGetUVIndexDataQuery } from '@/store/features/weather/uvApiSlice'
import {
    useGetAirPollutionDataQuery,
    useGetCurrentWeatherDataQuery,
    useGetDailyForecastDataQuery,
} from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import React from 'react'

const SplashScreenProvider = ({ children }: { children: React.ReactNode }) => {
    const coordinates = useAppSelector(selectCoordinates)
    const { isLoading: apLoading } = useGetAirPollutionDataQuery(coordinates)
    const { isLoading: awLoading } = useGetArchiveWeatherDataQuery(coordinates)
    const { isLoading: cwLoading } = useGetCurrentWeatherDataQuery(coordinates)
    const { isLoading: dfLoading } = useGetDailyForecastDataQuery(coordinates)
    const { isLoading: uvLoading } = useGetUVIndexDataQuery(coordinates)

    const isLoading = apLoading || awLoading || cwLoading || dfLoading || uvLoading

    if (isLoading) {
        return (
            <div className='flex h-screen w-full flex-col items-center justify-center gap-4'>
                <div className='border-t-primary text-primary flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-transparent text-4xl'>
                    <div className='border-t-destructive text-destructive flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent text-2xl'></div>
                </div>
            </div>
        )
    }

    return <>{children}</>
}

export default SplashScreenProvider
