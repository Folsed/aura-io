// Weather forecast types

export interface IWeatherForecast {
    coord?:
        | {
              lon: number
              lat: number
          }
        | undefined
    weather?:
        | Array<{
              id: number
              main: string
              description: string
              icon: string
          }>
        | undefined
    base?: string | undefined
    main?:
        | {
              temp: number
              feels_like: number
              temp_min: number
              temp_max: number
              pressure: number
              humidity: number
              sea_level: number
              grnd_level: number
          }
        | undefined
    visibility?: number | undefined
    wind?:
        | {
              speed: number
              deg: number
              gust: number
          }
        | undefined
    rain?:
        | {
              '1h': number
          }
        | undefined
    clouds?:
        | {
              all: number
          }
        | undefined
    dt?: number | undefined
    sys?:
        | {
              type: number
              id: number
              country: string
              sunrise: number
              sunset: number
          }
        | undefined
    timezone?: number | undefined
    id?: number | undefined
    name?: string | undefined
    cod?: number | undefined
}

// Air pullution types

export interface IAirPollution {
    coord: [number, number]
    list: Array<{
        dt: number
        main: {
            aqi: number
        }
        components: {
            co: number
            no: number
            no2: number
            o3: number
            so2: number
            pm2_5: number
            pm10: number
            nh3: number
        }
    }>
}

// Daily forecast types

export interface IDailyForecast {
    cod: string
    message: number
    cnt: number
    list: List[]
    city: City
}

export interface City {
    id: number
    name: string
    coord: Coord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

export interface Coord {
    lat: number
    lon: number
}

export interface List {
    dt: number
    main: Main
    weather: Weather[]
    clouds: Clouds
    wind: Wind
    visibility: number
    pop: number
    rain?: Rain
    sys: Sys
    dt_txt: Date
}

export interface Clouds {
    all: number
}

export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}

export interface Rain {
    '3h': number
}

export interface Sys {
    pod: string
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Wind {
    speed: number
    deg: number
    gust: number
}
