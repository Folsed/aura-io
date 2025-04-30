'use client'
import Navbar from '@/components/ui/Navbar'
import TemperatureBar from './components/temperature-bar/TemperatureBar'

export default function Home() {


    return (
        <main className='m-auto mx-4 lg:mx-8 xl:mx-24 2xl:mx-96'>
            <Navbar />

            <div className='flex flex-col gap-4 w-full min-w-72 md:w-[35rem]'>
                <TemperatureBar />
            </div>
            <div className='flex flex-col'></div>
        </main>
    )
}
