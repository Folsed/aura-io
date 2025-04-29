'use client'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/ui/Navbar'
import { useState } from 'react'

export default function Home() {
    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    const decrement = () => {
        setCounter(prevCounter => prevCounter - 1)
    }

    return (
        <main className='m-auto mx-4 lg:mx-8 xl:mx-24 2xl:mx-96'>
            <Navbar />

            <div className='absolute top-1/2 left-1/2 flex gap-2'>
                <span>{counter}</span>
                <Button onClick={increment}>+</Button>
                <Button onClick={decrement}>-</Button>
            </div>
        </main>
    )
}
