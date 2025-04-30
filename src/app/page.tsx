'use client'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/ui/Navbar'
import { decrement, increment, selectCount } from '@/store/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Link from 'next/link'
import { useGetCurrentWeatherDataQuery } from '@/store/features/weather/weatherApiSlice'

export default function Home() {
    const dispatch = useAppDispatch()
    const { data, isError, isLoading, isSuccess } = useGetCurrentWeatherDataQuery({
        lat: 44.34,
        lon: 10.99,
    })

    const count = useAppSelector(selectCount)

    if (!isLoading) console.log(data)

    return (
        <main className='m-auto mx-4 lg:mx-8 xl:mx-24 2xl:mx-96'>
            <Navbar />

            <div className='absolute top-1/2 right-0 flex gap-2'>
                {/*<span>{count}</span>*/}
                {/*<Button onClick={() => dispatch(increment())}>+</Button>*/}
                {/*<Button onClick={() => dispatch(decrement())}>-</Button>*/}
                <Link href={'/testpage'}>GO</Link>
            </div>

            <h1 className='text-5xl'>Weather DATA</h1>
        </main>
    )
}
