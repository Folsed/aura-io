'use client'
import { Progress } from '@/components/ui/progress'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useGetUVIndexDataQuery } from '@/store/features/weather/uvApiSlice'
import { useAppSelector } from '@/store/hooks'
import { uvIndexCategory } from '@/utils/uvIndexCategory'
import { SunIcon } from 'lucide-react'

const UvIndex = () => {
    const coordinates = useAppSelector(selectCoordinates)
    const { data, isLoading, error } = useGetUVIndexDataQuery(coordinates)

    if (isLoading) return <div>Loading...</div>

    const uvIndexMax = data?.daily.uv_index_max[0].toFixed(0)
    const marginLeftPercentage = (Number(uvIndexMax) / 14) * 100

    return (
        <div className='dark:bg-dark-grey flex h-[12rem] flex-col gap-5 rounded-lg border px-4 pt-6 pb-5 shadow-sm dark:shadow-none'>
            <div className='top'>
                <h2 className='flex items-center gap-2 font-medium'>
                    <SunIcon /> Uv Index
                </h2>
                <div className='flex flex-col gap-1 pt-4'>
                    <p className='text-2xl'>
                        {uvIndexMax}
                        <span className='text-sm'>
                            ({uvIndexCategory(Number(uvIndexMax)).text})
                        </span>
                    </p>

                    <Progress value={marginLeftPercentage} max={14} className='progress' />
                </div>
            </div>

            <p className='text-sm'>{uvIndexCategory(Number(uvIndexMax)).protection} </p>
        </div>
    )
}
export default UvIndex
