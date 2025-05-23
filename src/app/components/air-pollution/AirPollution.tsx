'use client'
import { Progress } from '@/components/ui/progress'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetAirPollutionDataQuery } from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import { airQulaityIndexText } from '@/utils/airQualityIndex'
import { ThermometerSun } from 'lucide-react'

const AirPollution = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data: airPollution, isLoading, isError } = useGetAirPollutionDataQuery(coordinates)

    if (isLoading) {
        return <p>Is Loading...</p>
    }

    const airQualityIndex = Number(airPollution?.list[0].main.aqi) * 10

    const filteredIndex = airQulaityIndexText.find(item => {
        return item.rating === airQualityIndex
    })

    return (
        <div className='air-pollution dark:bg-dark-grey sm-2:col-span-2 col-span-full flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 shadow-sm md:col-span-2 xl:col-span-2 dark:shadow-none'>
            <h2 className='flex items-center gap-2 font-medium'>
                <ThermometerSun />
                Air Pollusion
            </h2>
            <Progress value={20} max={100} className='progress' />
            <p className='text-sm'>Air quality is {filteredIndex?.description}. </p>
        </div>
    )
}
export default AirPollution
