'use client'

import { useGetCurrentWeatherDataQuery } from '@/store/features/weather/weatherApiSlice'
import { kelvinToCelsius } from '@/utils/kelvinToCelsius'
import { CloudDrizzle, CloudRain, CloudSnow, CloudSun, Cloudy, Navigation } from 'lucide-react'
import TemperatureTimer from './TemperatureTimer'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useAppSelector } from '@/store/hooks'
import { getWeatherIcon } from '@/utils/getWeatherIcon'

const TemperatureBar = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isError, isLoading, isSuccess } = useGetCurrentWeatherDataQuery(coordinates, {
        // pollingInterval: 60000,
    })
    const { main, timezone, name, weather } = data || {}

    const temp = kelvinToCelsius(main?.temp as number)
    const tempMin = kelvinToCelsius(main?.temp_min as number)
    const tempMax = kelvinToCelsius(main?.temp_max as number)

    if (isLoading) return <p>Loading…</p>
    if (isError || !data) return <p>Error loading weather</p>

    return (
        <div className='dark:bg-dark-grey flex flex-col justify-between rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <TemperatureTimer timezone={Number(timezone)} />
            <p className='flex gap-1 pt-2 font-bold'>
                <span className='text-primary'>{name}</span>
                <span>
                    <Navigation />
                </span>
            </p>
            <p className='self-center py-10 text-9xl font-bold'>{temp}°</p>

            <div>
                <div>
                    <span>{getWeatherIcon(String(weather?.[0]?.main))}</span>
                    <p className='pt-2 text-lg font-medium capitalize'>
                        {weather?.[0].description}
                    </p>
                </div>
                <p className='flex items-center gap-2'>
                    <span>Low: {tempMin}°</span>
                    <span>High: {tempMax}°</span>
                </p>
            </div>
        </div>
    )
}
export default TemperatureBar
