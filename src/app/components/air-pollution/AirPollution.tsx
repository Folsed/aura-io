'use client'
import { useGetAirPollutionDataQuery } from '@/store/features/weather/weatherApiSlice'
import { ThermometerSun } from 'lucide-react'

const AirPollution = () => {
    const { data, isLoading, isError } = useGetAirPollutionDataQuery({ lat: 50.4418, lon: 30.5104 })

    console.log(data)

    return (
        <div className='air-pollution dark:bg-dark-grey sm-2:col-span-2 col-span-full flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 shadow-sm md:col-span-2 xl:col-span-2 dark:shadow-none'>
            <h2 className='flex items-center gap-2 font-medium'>
                <ThermometerSun />
                Air Pollusion
            </h2>
            {/* <Progress value={airQualityIndex} max={100} className='progress' /> */}
            {/* <p className='text-sm'>Air quality is {filteredIndex?.description}. </p> */}
        </div>
    )
}
export default AirPollution
