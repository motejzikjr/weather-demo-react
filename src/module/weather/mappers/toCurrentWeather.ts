import { WeatherResponse } from "../types/WeatherResponse";
import { CurrentWeather } from "../types/CurrentWeather";

export const toCurrentWeather = (data: WeatherResponse): CurrentWeather => {
    return {
        temperature: data?.current?.temperature_2m ?? undefined,
        windSpeed: data?.current?.windspeed_10m ?? undefined,
        time: data?.current?.time ?? undefined,
    }
};
