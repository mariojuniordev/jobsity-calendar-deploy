import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { DayWeatherProps } from "../../dtos/dayWeather";
import { WeatherData } from "../../dtos/weather";
import { apiVisualCrossing } from "../../services/apiVisualCrossing";
import { Text } from "../UI/Text";
import { VISUAL_CROSSING_API_KEY } from '../../data/data';

export function DayWeather({ city, date }: DayWeatherProps) {
    const [forecast, setForecast] = useState<WeatherData | null>(null);

    useEffect(() => {
        if (date) {
            if (dayjs().valueOf() <= dayjs(date).valueOf()) {
                apiVisualCrossing.get(
                    `/${city}/next30days?unitGroup=metric&key=${VISUAL_CROSSING_API_KEY}&contentType=json`
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