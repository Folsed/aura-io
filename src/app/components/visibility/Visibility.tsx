'use client'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetCurrentWeatherDataQuery } from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import { getVisibilityDescription } from '@/utils/getVisibilityDescription'
import { EyeIcon } from 'lucide-react'

const Visibility = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isLoading } = useGetCurrentWeatherDataQuery(coordinates)
    if (isLoading) return <b>Loading...</b>
    const { visibility } = data || {}

    return (
        <div className='dark:bg-dark-grey flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <div className='top'>
                <h2 className='flex items-center gap-2 font-medium'>
                    <EyeIcon /> Visibility
                </h2>
                <p className='pt-4 text-2xl'>{Math.round(Number(visibility) / 1000)} km</p>
            </div>

            <p className='text-sm'>{getVisibilityDescription(Number(visibility))}.</p>
        </div>
    )
}
export default Visibility
