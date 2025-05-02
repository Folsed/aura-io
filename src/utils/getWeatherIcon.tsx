import { CloudDrizzle, CloudRain, CloudSnow, CloudSun, Cloudy } from 'lucide-react'
import { JSX } from 'react'

export const getWeatherIcon = (condition: string): JSX.Element => {
    switch (condition) {
        case 'Drizzle':
            return <CloudDrizzle />
        case 'Rain':
            return <CloudRain />
        case 'Snow':
            return <CloudSnow />
        case 'Clear':
            return <CloudSun />
        case 'Clouds':
            return <Cloudy />
        default:
            return <CloudSun />
    }
}
