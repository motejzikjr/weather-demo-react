export interface WeatherResponse {
    current?: {
        temperature_2m?: number
        time?: string
        windspeed_10m?: number
    }
    daily?: {
        temperature_2m_max?: number[]
        temperature_2m_min?: number[]
        time?: string[]
        weathercode?: number[]
    }
}
