'use client'
import Navbar from '@/components/ui/Navbar'
import TemperatureBar from './components/temperature-bar/TemperatureBar'
import AirPollution from './components/air-pollution/AirPollution'

export default function Home() {
    return (
        <main className='m-auto mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem]'>
            <Navbar />
            <div className='flex flex-col gap-4 pb-4 md:flex-row'>
                <div className='flex w-full min-w-[18rem] flex-col gap-4 md:w-[35rem]'>
                    <TemperatureBar />
                </div>
                <div className='flex w-full flex-col'>
                    <div className='instruments grid h-full gap-4 sm:col-span-1 md:grid-cols-2 lg:grid-cols-3 xl:col-span-full xl:grid-cols-4'>
                        <AirPollution />
                    </div>
                </div>
            </div>
        </main>
    )
}
