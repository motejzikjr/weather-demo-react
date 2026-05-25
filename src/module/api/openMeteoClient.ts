const WEATHER_BASE_URL = 'https://api.open-meteo.com/v1';
const GEOCODING_BASE_URL = 'https://geocoding-api.open-meteo.com/v1';

export class ApiError extends Error {
    constructor(
        message: string,
        public readonly status?: number,
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

const get = async <T>(baseUrl: string, path: string, params?: Record<string, string | number>): Promise<T> => {
    const url = new URL(`${baseUrl}/${path}`);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.set(key, String(value));
        });
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new ApiError(`Request failed: ${response.statusText}`, response.status);
    }

    return response.json() as Promise<T>;
};

export const weatherApi = {
    get: <T>(path: string, params?: Record<string, string | number>) =>
        get<T>(WEATHER_BASE_URL, path, params),
};

export const geocodingApi = {
    get: <T>(path: string, params?: Record<string, string | number>) =>
        get<T>(GEOCODING_BASE_URL, path, params),
};
