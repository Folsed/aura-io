'use client'
import { useGetCurrentWeatherDataQuery } from '@/store/features/weather/weatherApiSlice'
import { unixToTime } from '@/utils/unixTo'

const Sunset = () => {
    const { data, isLoading } = useGetCurrentWeatherDataQuery({
        lat: 50.4418,
        lon: 30.5104,
    })
    if (isLoading) return <p>Loading...</p>

    const times = data?.sys
    const timezpone = data?.timezone

    const sunsetTime = unixToTime(times, timezpone)
    

    return (
        <div className='dark:bg-dark-grey flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <div className='top'>
                <h2 className='flex items-center gap-2 font-medium'>Sunset</h2>
                <p className='pt-4 text-2xl'></p>
            </div>

            <p className='text-sm'>Sunrise: </p>
        </div>
    )
}
export default Sunset
