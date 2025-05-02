export interface IUvIndex {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    hourly_units: IUvIndexHourlyUnits
    hourly: IUvIndexHourly
    daily_units: IUvIndexDailyUnits
    daily: IUvIndexDaily
}

export interface IUvIndexDaily {
    time: Date[]
    uv_index_max: number[]
    uv_index_clear_sky_max: number[]
}

export interface IUvIndexDailyUnits {
    time: string
    uv_index_max: string
    uv_index_clear_sky_max: string
}

export interface IUvIndexHourly {
    time: string[]
    temperature_2m: number[]
}

export interface IUvIndexHourlyUnits {
    time: string
    temperature_2m: string
}
