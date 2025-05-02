import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetDailyForecastDataQuery } from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import { formatNumber } from '@/utils/formatPopulationNumber'
import { UsersIcon } from 'lucide-react'

const Population = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isLoading } = useGetDailyForecastDataQuery(coordinates)

    if (isLoading) return <p>Loading...</p>

    console.log(data)

    return (
        <div className='dark:bg-dark-grey flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <div className='top'>
                <h2 className='flex items-center gap-2 font-medium'><UsersIcon/> Population</h2>
                <p className='pt-4 text-2xl'>{formatNumber(Number(data?.city.population))}</p>
            </div>
            <p className='text-sm'>Latest UN population data for {data?.city.name}.</p>
        </div>
    )
}
export default Population
