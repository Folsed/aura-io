'use client'

import { Progress } from '@/components/ui/progress'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetDailyForecastDataQuery } from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import { IDailyForecastList } from '@/types'
import { kelvinToCelsius } from '@/utils/kelvinToCelsius'
import { unixToDay } from '@/utils/unixTo'
import { Calendar1Icon } from 'lucide-react'

const FiveDaysForecast = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isLoading } = useGetDailyForecastDataQuery(coordinates)
    const { city, list = [] } = data || {}

    if (isLoading) return <b>Loading...</b>

    const processData = (dayList: IDailyForecastList[]) => {
        let minTemp = Number.MAX_VALUE
        let maxTemp = Number.MIN_VALUE

        dayList.forEach((day: IDailyForecastList) => {
            if (day.main.temp_min < minTemp) {
                minTemp = day.main.temp_min
            }
            if (day.main.temp_max > maxTemp) {
                maxTemp = day.main.temp_max
            }
        })

        return {
            day: unixToDay(dayList[0].dt),
            minTemp: kelvinToCelsius(minTemp),
            maxTemp: kelvinToCelsius(maxTemp),
        }
    }
    const dailyForecasts = []

    for (let i = 0; i < 40; i += 8) {
        const dailyData = list?.slice(i, i + 5)
        dailyForecasts.push(processData(dailyData))
    }

    console.log(dailyForecasts)

    return (
        <div className='dark:bg-dark-grey flex flex-1 flex-col justify-between rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <div>
                <h2 className='flex items-center gap-2 font-medium'>
                    <Calendar1Icon /> 5-Days Forecast for {city?.name}
                </h2>

                <div className='forecast-list pt-3'>
                    {dailyForecasts.map((day, i) => {
                        return (
                            <div
                                key={i}
                                className='daily-forevast flex flex-col justify-evenly border-b-2 py-4'
                            >
                                <p className='min-w-[3.5rem] text-xl'>{day.day}</p>
                                <p className='flex justify-between text-sm'>
                                    <span>(low)</span>
                                    <span>(high)</span>
                                </p>

                                <div className='flex flex-1 items-center justify-between gap-4'>
                                    <p className='font-bold'>{day.minTemp}°C</p>
                                    <Progress className='temperature' />
                                    <p className='font-bold'>{day.maxTemp}°C</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default FiveDaysForecast
