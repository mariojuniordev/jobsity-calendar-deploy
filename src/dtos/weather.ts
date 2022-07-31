export interface DayWeather {
    cloudcover: number;
    conditions: string;
    datetime: string;
    datetimeEpoch: number;
    description: string;
    dew: number;
    feelslike: number;
    feelslikemax: number;
    feelslikemin: number;
    hours: any[];
    humidity: number;
    icon: string;
    moonphase: number;
    precip: number;
    precipcover: number;
    precipprob: number;
    preciptype: string[];
    pressure: number;
    severerisk: number;
    snow: number;
    snowdepth: number;
    solarenergy: number;
    solarradiation: number;
    source: string;
    stations: string[];
    sunrise: string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    temp: number;
    tempmax: number;
    tempmin: number;
    uvindex: number;
    visibility: number;
    winddir: number;
    windgust: number;
    windspeed: number;
}

export interface Conditions {
    cloudcover: number;
    conditions: string;
    datetime: string;
    datetimeEpoch: number;
    dew: number;
    feelslike: number;
    humidity: number;
    icon: string;
    moonphase: number;
    precip: number;
    precipprob: any;
    preciptype: any;
    pressure: number;
    snow: number;
    snowdepth: number;
    solarenergy: number;
    solarradiation: number;
    stations: string[];
    sunrise: string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    temp: number;
    uvindex: number;
    visibility: number;
    winddir: number;
    windgust: any;
    windspeed: number;
}

export interface WeatherData {
    address: string;
    alerts?: any[];
    currentConditions: Conditions;
    days: DayWeather[];
    description: string;
    latitude: number;
    longitude: number;
    queryCost: number;
    resolvedAddres: string;
    stations: any;
    timezone: string;
    tzoffset: number;
}

export type tempType = string | number | undefined;