import moment from 'moment'
import { useEffect, useState } from 'react'

const TemperatureTimer = ({ timezone }: { timezone: number }) => {
    const [localTime, setLocalTime] = useState<string>('')
    const [currentDay, setCurrentDay] = useState<string>('')
    useEffect(() => {
        const interval = setInterval(() => {
            const localMoment = moment().utcOffset(timezone / 60)
            const formatedTime = localMoment.format('HH:mm:ss')
            const day = localMoment.format('dddd')

            setLocalTime(formatedTime)
            setCurrentDay(day)
        }, 1000)

        return () => clearInterval(interval)
    }, [timezone])
    return (
        <p className='flex items-center justify-between'>
            <span className='font-medium'>{currentDay}</span>
            <span className='font-medium'>{localTime}</span>
        </p>
    )
}
export default TemperatureTimer
