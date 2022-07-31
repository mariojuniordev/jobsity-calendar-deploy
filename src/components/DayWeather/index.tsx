import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { DayWeatherProps } from "../../dtos/dayWeather";
import { WeatherData } from "../../dtos/weather";
import { apiVisualCrossing } from "../../services/apiVisualCrossing";
import { Text } from "../UI/Text";

export function DayWeather({ city, date }: DayWeatherProps) {
    const [forecast, setForecast] = useState<WeatherData | null>(null);

    useEffect(() => {
        if (date) {
            if (dayjs().format('YYYY-MM-DD') < date) {
                apiVisualCrossing.get(
                    `/${city}/next30days?unitGroup=metric&key=QJ54JSMNYUT76FMBQF773TUQM&contentType=json`
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
            color="var(--white)" 
            p="5px"
            borderRadius="5px"
            textAlign="center"
            fontWeight={'bold'}
            backgroundColor="var(--current-line)"
        >
            { `${forecastByDay?.dayCondition?.toLocaleUpperCase()} ${forecastByDay?.dayTemp} °C` }
        </Text>
    )
}