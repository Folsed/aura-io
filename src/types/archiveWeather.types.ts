export interface IArchiveWeather {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    hourly_units: IArchiveWeatherHourlyUnits
    hourly: IArchiveWeatherHourly
}

export interface IArchiveWeatherHourly {
    time: string[]
    temperature_2m: number[]
}

export interface IArchiveWeatherHourlyUnits {
    time: string
    temperature_2m: string
}

export interface IDayTemp {
    temp: number
    day: string
}
