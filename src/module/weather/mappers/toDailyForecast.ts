import { WeatherResponse } from "../types/WeatherResponse";
import { DailyForecast } from "../types/DailyForecast";

export const toDailyForecast = (data: WeatherResponse): DailyForecast[] => {
    const { time, weathercode, temperature_2m_max, temperature_2m_min } = data?.daily ?? {};

    return (time ?? []).map((date, index) => ({
        date,
        code: weathercode?.[index] ?? undefined,
        temperatureFrom: temperature_2m_min?.[index] ?? undefined,
        temperatureTo: temperature_2m_max?.[index] ?? undefined,
    }));
};
