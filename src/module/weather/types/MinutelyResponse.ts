export interface MinutelyResponse {
  minutely_15?: {
    time?: string[]
    temperature_2m?: number[]
    apparent_temperature?: number[]
    dew_point_2m?: number[]
    precipitation?: number[]
    rain?: number[]
    snowfall?: number[]
    sunshine_duration?: number[]
    weather_code?: number[]
    is_day?: number[]
  }
}
