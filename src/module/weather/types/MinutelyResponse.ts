export interface MinutelyResponse {
  minutely_15?: {
    time?: string[]
    temperature_2m?: number[]
    relative_humidity_2m?: number[]
    dew_point_2m?: number[]
    apparent_temperature?: number[]
    precipitation?: number[]
    rain?: number[]
    snowfall?: number[]
    snowfall_height?: number[]
    freezing_level_height?: number[]
    sunshine_duration?: number[]
    weather_code?: number[]
    wind_speed_10m?: number[]
    wind_speed_80m?: number[]
    wind_direction_10m?: number[]
    wind_direction_80m?: number[]
    wind_gusts_10m?: number[]
    visibility?: number[]
    is_day?: number[]
  }
}
