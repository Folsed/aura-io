'use client'

import { useGetCurrentWeatherDataQuery } from '@/store/features/weather/weatherApiSlice'
import { kelvinToCelsius } from '@/utils/kelvinToCelsius'
import { CloudDrizzle, CloudRain, CloudSnow, CloudSun, Cloudy, Navigation } from 'lucide-react'
import { useEffect, useState } from 'react'
import moment from 'moment'

const TemperatureBar = () => {
    const { data, isError, isLoading, isSuccess } = useGetCurrentWeatherDataQuery({
        lat: 44.34,
        lon: 10.99,
    })
    const { main, timezone = 0, name, weather } = data || {}

    const temp = kelvinToCelsius(main?.temp as number)
    const tempMin = kelvinToCelsius(main?.temp_min as number)
    const tempMax = kelvinToCelsius(main?.temp_max as number)

    console.log()

    const getIcon = () => {
        switch (weather?.[0]?.main) {
            case 'Drizzle':
                return <CloudDrizzle />
            case 'Rain':
                return <CloudRain />
            case 'Snow':
                return <CloudSnow />
            case 'Clear':
                return <CloudSun />
            case 'Clouds':
                return <Cloudy />
            default:
                return <CloudSun />
        }
    }

    const [localTime, setLocalTime] = useState<string>('')
    const [currentDay, setCurrentDay] = useState<string>('')

    useEffect(() => {
        const interval = setInterval(() => {
            const localMoment = moment().utcOffset(timezone / 60)
            const formatedTime = localMoment.format('HH:mm:ss')
            const day = localMoment.format('dddd')

            setLocalTime(formatedTime)
            setCurrentDay(day)
        }, 1000)

        return () => clearInterval(interval)
    }, [timezone])

    if (isLoading) return <p>Loading…</p>
    if (isError || !data) return <p>Error loading weather</p>

    return (
        <div className='dark:bg-dark-grey flex flex-col justify-between rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <p className='flex items-center justify-between'>
                <span className='font-medium'>{currentDay}</span>
                <span className='font-medium'>{localTime}</span>
            </p>
            <p className='flex gap-1 pt-2 font-bold'>
                <span>{name}</span>
                <span>
                    <Navigation />
                </span>
            </p>
            <p className='self-center py-10 text-9xl font-bold'>{temp}°</p>

            <div>
                <div>
                    <span>{getIcon()}</span>
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
