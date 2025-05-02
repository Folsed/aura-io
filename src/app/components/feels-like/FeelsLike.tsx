import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetCurrentWeatherDataQuery } from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import { feelsLikeText } from '@/utils/feelsLikeText'
import { kelvinToCelsius } from '@/utils/kelvinToCelsius'
import { Thermometer } from 'lucide-react'

const FeelsLike = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isLoading } = useGetCurrentWeatherDataQuery(coordinates)

    if (isLoading) return <b>Loading...</b>

    const { feels_like = 0, temp_min = 0, temp_max = 0 } = data?.main || {}

    const feelsLikeDescription = feelsLikeText(feels_like, temp_min, temp_max)
    return (
        <div className='dark:bg-dark-grey flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <div className='top'>
                <h2 className='flex items-center gap-2 font-medium'><Thermometer/> Feels Like</h2>
                <p className='pt-4 text-3xl'>{kelvinToCelsius(feels_like)}°</p>
            </div>

            <p className='text-sm'>{feelsLikeDescription}</p>
        </div>
    )
}
export default FeelsLike
