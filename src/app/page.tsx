'use client'
import Navbar from '@/components/ui/Navbar'
import TemperatureBar from './components/temperature-bar/TemperatureBar'
import AirPollution from './components/air-pollution/AirPollution'
import Sunset from './components/sunset/Sunset'
import WindCompass from './components/wind-compass/WindCompass'
import DailyForecast from './components/daily-forecast/DailyForecast'
import UvIndex from './components/uv-index/UvIndex'
import Population from './components/population/Population'
import FeelsLike from './components/feels-like/FeelsLike'
import Humidity from './components/humidity/Humidity'
import Visibility from './components/visibility/Visibility'
import Pressure from './components/pressure/Pressure'
import Mapbox from './components/mapbox/Mapbox'
import TopLargeSities from './components/top-large-cities/TopLargeSities'
import FiveDaysForecast from './components/five-days-forecast/FiveDaysForecast'
import WeatherHistoryChart from './components/weather-history-chart/WeatherHistoryChart'

export default function Home() {
    return (
        <main className='texture m-auto mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem]'>
            <Navbar />
            <div className='flex flex-col gap-4 pb-4 md:flex-row'>
                <div className='flex w-full min-w-[18rem] flex-col gap-4 md:w-[35rem]'>
                    <TemperatureBar />
                    <FiveDaysForecast />
                </div>
                <div className='flex w-full flex-col'>
                    <div className='instruments grid h-full gap-4 sm:col-span-1 md:grid-cols-2 lg:grid-cols-3 xl:col-span-full xl:grid-cols-4'>
                        <AirPollution />
                        <Sunset />
                        <WindCompass />
                        <DailyForecast />
                        <UvIndex />
                        <Population />
                        <FeelsLike />
                        <Humidity />
                        <Visibility />
                        <Pressure />
                    </div>
                    <div className='mt-4 flex gap-4'>
                        <WeatherHistoryChart/>
                        {/* <TopLargeSities /> */}
                    </div>
                </div>
            </div>
        </main>
    )
}
