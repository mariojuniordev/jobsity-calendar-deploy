import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { DayWeatherProps } from "../../dtos/dayWeather";
import { WeatherData } from "../../dtos/weather";
import { apiVisualCrossing } from "../../services/apiVisualCrossing";
import { Text } from "../UI/Text";

export function DayWeather({ city, date }: DayWeatherProps) {
    const [forecast, setForecast] = useState<WeatherData | null>(null);
    console.log(`DATE: ${dayjs()}, CITY: ${city}`)

    useEffect(() => {
        if (date) {
            if (dayjs().format('YYYY-MM-DD') < date) {
                apiVisualCrossing.get(
                    `/${city}/next30days?unitGroup=metric&key=KCHN78GVN2T5ACY7V4K5N9AA9&contentType=json`
                ).then(response => setForecast(response?.data))
            }
        }
    }, [city]);

    const forecastByDay = useMemo(() => {
        let dayTemp;
        let dayCondition;

        const correspondingWeather = forecast?.days.find(item => item.datetime === date);

        dayTemp = correspondingWeather?.temp;
        dayCondition = correspondingWeather?.conditions;

        return { dayTemp, dayCondition }

    }, [forecast]);  

    if (!forecast) {
        return <div/>
    }

    return (
        <Text                             
            variant="h5"
            color="var(--current-line)" 
            textAlign="center"
            fontWeight={'bold'}
        >
            { `${forecastByDay?.dayCondition?.toLocaleUpperCase()} ${forecastByDay?.dayTemp}` }
        </Text>
    )
}