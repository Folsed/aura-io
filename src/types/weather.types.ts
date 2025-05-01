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
