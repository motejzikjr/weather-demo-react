import { create } from 'zustand'

interface WeatherStore {
    currentTemperature: number;
    lastUpdated: Date | null;
    updateCurrentTemperature: (newValue: number) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
    currentTemperature: 0,
    lastUpdated: null,
    updateCurrentTemperature: (newValue: number) => set({ currentTemperature: newValue, lastUpdated: new Date() }),
}))
