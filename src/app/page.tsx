'use client'
import Navbar from '@/components/ui/Navbar'
import TemperatureBar from './components/temperature-bar/TemperatureBar'
import AirPollution from './components/air-pollution/AirPollution'

export default function Home() {
    return (
        <main className='m-auto mx-4 lg:mx-8 xl:mx-24 2xl:mx-96'>
            <Navbar />

            <div className='flex flex-col gap-4 pb-4 md:flex-row'>
                <div className='flex w-full min-w-72 flex-col gap-4 md:w-[35rem]'>
                    <TemperatureBar />
                </div>
                <div className='flex flex-col'>
                    <div className='grid h-full gap-4 col-span-full sm:col-span-2 lg:grid-cols-3 xl:grid-cols-4'>
                        <AirPollution/>
                    </div>
                </div>
            </div>
        </main>
    )
}
