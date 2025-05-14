'use client'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetCurrentWeatherDataQuery } from '@/store/features/weather/weatherApiSlice'
import { useAppSelector } from '@/store/hooks'
import Image from 'next/image'

const WindCompass = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isLoading } = useGetCurrentWeatherDataQuery(coordinates)

    if (isLoading) return <p>Loading...</p>

    return (
        <div className='dark:bg-dark-grey col-span-full flex h-[12rem] flex-col gap-3 rounded-lg border px-4 pt-6 pb-5 shadow-sm sm:col-span-2 md:col-span-1 xl:col-span-1 dark:shadow-none'>
            <h2 className='flex items-center gap-2 font-medium'> Wind</h2>

            <div className='relative flex items-center justify-center'>
                <div className='relative flex items-center justify-center'>
                    <Image src='/svgs/compass_body.svg' alt='compass' width={110} height={110} />
                    <Image
                        src='/svgs/compass_arrow.svg'
                        alt='compass'
                        className='absolute top-1/2 left-1/2 h-auto w-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out dark:invert'
                        style={{
                            transform: `rotate(${data?.wind?.deg}deg)`,
                            height: '100%',
                        }}
                        width={11}
                        height={11}
                    />
                </div>
                <p className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs font-medium dark:text-white'>
                    {Math.round(Number(data?.wind?.speed))} m/s
                </p>
            </div>
        </div>
    )
}
export default WindCompass
