'use client'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetCurrentWeatherDataQuery } from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import { getHumidityText } from '@/utils/getHumidityText'
import { Droplets } from 'lucide-react'

const Humidity = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isLoading } = useGetCurrentWeatherDataQuery(coordinates)
    if (isLoading) return <b>Loading...</b>

    const { humidity } = data?.main || {}

    return (
        <div className='dark:bg-dark-grey flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <div className='top'>
                <h2 className='flex items-center gap-2 font-medium'>
                    <Droplets /> Humidity
                </h2>
                <p className='pt-4 text-2xl'>{humidity}%</p>
            </div>

            <p className='text-sm'>{getHumidityText(Number(humidity))}.</p>
        </div>
    )
}
export default Humidity
