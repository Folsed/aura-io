import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetDailyForecastDataQuery } from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import { kelvinToCelsius } from '@/utils/kelvinToCelsius'
import moment from 'moment'

const DailyForecast = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isLoading, isError } = useGetDailyForecastDataQuery(coordinates)

    if (isLoading) return <div>Loading...</div>

    console.log(data)



    return (
        <div className='dark:bg-dark-grey sm-2:col-span-2 col-span-full flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 shadow-sm md:col-span-2 xl:col-span-2 dark:shadow-none'>
            {/* <div className='flex h-full gap-10 overflow-hidden'>
                {todaysForecast.length < 1 ? (
                    <div className='flex items-center justify-center'>
                        <h1 className='text-[3rem] text-rose-500 line-through'>
                            No Data Available!
                        </h1>
                    </div>
                ) : (
                    <div className='w-full'>
                        <Carousel>
                            <CarouselContent>
                                {todaysForecast.map(
                                    (forecast: { dt_txt: string; main: { temp: number } }) => {
                                        return (
                                            <CarouselItem
                                                key={forecast.dt_txt}
                                                className='flex basis-[8.5rem] cursor-grab flex-col gap-4'
                                            >
                                                <p className='text-gray-300'>
                                                    {moment(forecast.dt_txt).format('HH:mm')}
                                                </p>
                                                <p>{getIcon()}</p>
                                                <p className='mt-4'>
                                                    {kelvinToCelsius(forecast.main.temp)}°C
                                                </p>
                                            </CarouselItem>
                                        )
                                    }
                                )}
                            </CarouselContent>
                        </Carousel>
                    </div>
                )}
            </div> */}
        </div>
    )
}
export default DailyForecast
