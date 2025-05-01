'use client'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetCurrentWeatherDataQuery } from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import { unixToTime } from '@/utils/unixTo'
import { SunsetIcon } from 'lucide-react'

const Sunset = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isLoading } = useGetCurrentWeatherDataQuery(coordinates)
    if (isLoading) return <p>Loading...</p>

    const timezpone = data?.timezone

    const sunsetTime = unixToTime(Number(data?.sys?.sunset), Number(timezpone))
    const sunrise = unixToTime(Number(data?.sys?.sunrise), Number(timezpone))

    return (
        <div className='dark:bg-dark-grey flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <div className='top'>
                <h2 className='flex items-center gap-2 font-medium'>
                    <SunsetIcon />
                    Sunset
                </h2>
                <p className='pt-4 text-2xl'>{sunsetTime}</p>
            </div>

            <p className='text-sm'>Sunrise: {sunrise}</p>
        </div>
    )
}
export default Sunset
