'use client'
import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import { useAppSelector } from '@/store/hooks'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetArchiveWeatherDataQuery } from '@/store/features/weather/archiveWeatherApiSlice'

const chartConfig = {
    temp: {
        label: 'Temp °C',
        color: 'var(--chart-1)',
    },
} satisfies ChartConfig

const WeatherHistoryChart = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data: pastWeekData } = useGetArchiveWeatherDataQuery(coordinates)

    return (
        <Card className='flex-1 rounded-lg bg-transparent'>
            <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
                <div className='grid flex-1 gap-1 text-center sm:text-left'>
                    <CardTitle>Past and future weather</CardTitle>
                    <CardDescription>Shows temperature changes over the past 15 days</CardDescription>
                </div>
            </CardHeader>
            <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
                <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full'>
                    <AreaChart data={pastWeekData}>
                        <defs>
                            <linearGradient id='fillTempChart' x1='0' y1='0' x2='0' y2='1'>
                                <stop offset='5%' stopColor='var(--color-temp)' stopOpacity={0.8} />
                                <stop
                                    offset='95%'
                                    stopColor='var(--color-temp)'
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />

                        <XAxis
                            dataKey='day'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={3}
                            tickFormatter={value => {
                                const date = new Date(value)
                                return date.toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                })
                            }}
                        />
                        <YAxis
                            dataKey='temp'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={12}
                        />
                        <ChartTooltip
                            cursor={true}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={value => {
                                        const dt = new Date(value)
                                        return (
                                            dt.toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                            }) +
                                            '  ' +
                                            dt.toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })
                                        )
                                    }}
                                    indicator='dot'
                                />
                            }
                        />
                        <Area
                            dataKey='temp'
                            type='natural'
                            fill='url(#fillTempChart)'
                            stroke='var(--chart-1)'
                            stackId='a'
                        />
                        <ChartLegend content={<ChartLegendContent nameKey='temp' />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default WeatherHistoryChart
