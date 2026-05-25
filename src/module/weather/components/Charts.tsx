import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import { cs } from 'date-fns/locale';
import { DailyForecast } from '../types/DailyForecast';

interface Props {
    forecast: DailyForecast[];
}

export const Charts = ({ forecast }: Props) => {
    const data = forecast.map((day) => ({
        date: day.date ? format(parseISO(day.date), 'EEE d.M.', { locale: cs }) : '—',
        Min: day.temperatureFrom,
        Max: day.temperatureTo,
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis unit="°C" />
                <Tooltip formatter={(value) => `${value}°C`} />
                <Legend />
                <Line type="monotone" dataKey="Min" stroke="#90caf9" dot />
                <Line type="monotone" dataKey="Max" stroke="#ef9a9a" dot />
            </LineChart>
        </ResponsiveContainer>
    );
};
