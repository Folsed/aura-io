import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import {
    useGetCurrentWeatherDataQuery,
    useGetDailyForecastDataQuery,
} from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import { IDailyForecastList } from '@/types'
import { getWeatherIcon } from '@/utils/getWeatherIcon'
import { kelvinToCelsius } from '@/utils/kelvinToCelsius'
import moment from 'moment'

type TDailyForecastString = Omit<IDailyForecastList, 'dt_txt'> & {
    dt_txt: string
}

const DailyForecast = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const {
        data: dailyForecast,
        isLoading: dfLoading,
        isError: dfError,
    } = useGetDailyForecastDataQuery(coordinates)
    const {
        data: weatherData,
        isLoading: fLoading,
        isError: fError,
    } = useGetCurrentWeatherDataQuery(coordinates)

    if (dfLoading && fLoading) return <div>Loading...</div>

    const today = new Date()
    const todayString: string = today.toISOString().split('T')[0]

    const todaysForecast = dailyForecast?.list.filter(forecast =>
        forecast.dt_txt.startsWith(todayString)
    )

    return (
        <div className='col-span-full flex h-[12rem] flex-col gap-8 rounded-lg border px-4 pt-6 shadow-sm sm:col-span-2 md:col-span-2 xl:col-span-2 dark:shadow-none'>
            <div className='flex h-full gap-10 overflow-hidden select-none'>
                {todaysForecast && todaysForecast.length < 1 ? (
                    <div className='flex items-center justify-center'>
                        <h1 className='text-[3rem] line-through'>No Data Available!</h1>
                    </div>
                ) : (
                    <div className='w-full'>
                        <Carousel>
                            <CarouselContent>
                                {todaysForecast?.map(
                                    (forecast: { dt_txt: string; main: { temp: number } }) => {
                                        return (
                                            <CarouselItem
                                                key={forecast.dt_txt}
                                                className='flex basis-[8.5rem] cursor-grab flex-col gap-4'
                                            >
                                                <p>{moment(forecast.dt_txt).format('HH:mm')}</p>
                                                <p>
                                                    {getWeatherIcon(
                                                        String(weatherData?.weather?.[0]?.main)
                                                    )}
                                                </p>
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
            </div>
        </div>
    )
}
export default DailyForecast
