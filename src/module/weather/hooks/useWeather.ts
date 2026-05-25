import { weatherApi } from "../../api/openMeteoClient";
import { useEffect, useState } from "react";
import { toCurrentWeather } from "../mappers/toCurrentWeather";
import { toDailyForecast } from "../mappers/toDailyForecast";
import { WeatherResponse } from "../types/WeatherResponse";
import { CurrentWeather } from "../types/CurrentWeather";
import { DailyForecast } from "../types/DailyForecast";
import { useWeatherStore } from "../stores/weatherStore";

interface WeatherData {
    current: CurrentWeather;
    forecast: DailyForecast[]
}

export const useWeather = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    const { updateCurrentTemperature } = useWeatherStore()

    const getWeather = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const data = await weatherApi.get<WeatherResponse>('forecast', {
                latitude: 50.08,
                longitude: 14.42,
                current: 'temperature_2m,windspeed_10m',
                daily: 'weathercode,temperature_2m_max,temperature_2m_min',
                forecast_days: 7,
            });

            const current = toCurrentWeather(data);
            const forecast = toDailyForecast(data);

            setWeather({
                current,
                forecast,
            })

            updateCurrentTemperature(current?.temperature ?? 0);
        } catch (error) {
            if (error instanceof Error) {
                setError(error)
            }
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getWeather().catch(console.error)
    }, [])

    return {
        weather,
        isLoading,
        error,
        getWeather,
        refresh: getWeather,
    };
};
