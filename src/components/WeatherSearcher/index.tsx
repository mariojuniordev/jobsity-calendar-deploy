import { useEffect, useMemo, useState } from "react";
import { Oval } from "react-loader-spinner";
import { tempType, WeatherData } from "../../dtos/weather";
import { apiIpInfo } from "../../services/apiIpInfo";
import { apiVisualCrossing } from "../../services/apiVisualCrossing";
import { convertFromCelsiusToFarenheit } from "../../utils/tempConversion";
import { Flex } from "../UI/Flex";
import { Text } from "../UI/Text";
import { ConversionButton } from "./style";

export function WeatherSearcher() {
    const [city, setCity] = useState<any>('New York');    
    const [tempUnit, setTempUnit] = useState<'celsius' | 'farenheit'>('celsius');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const tempMaxInCelsius = weatherData?.days[0].tempmax;
    const tempMinInCelsius = weatherData?.days[0].tempmin;
    const currentTempInCelsius = weatherData?.days[0].temp;
    const conditions = weatherData?.days[0].conditions;

    useEffect(() => {
        apiIpInfo.get('/json?token=d876aa19dcf322')
        .then(response => setCity(
            response?.data.city ?? 'New York'
        ))
    }, []);

    useEffect(() => {
        apiVisualCrossing.get(
            `/${city}/next30days?unitGroup=metric&key=KCHN78GVN2T5ACY7V4K5N9AA9&contentType=json`
        ).then(response => setWeatherData(response?.data))
    }, [city]);

    const temp = useMemo(() => {
        let max: tempType = tempMaxInCelsius;
        let min: tempType = tempMinInCelsius;
        let current: tempType = currentTempInCelsius;

        if (tempUnit === 'farenheit') {
            max = convertFromCelsiusToFarenheit(max);
            min = convertFromCelsiusToFarenheit(min);
            current = convertFromCelsiusToFarenheit(current);
        }

        if (tempUnit === 'celsius') {
            max = `${max} °C`;
            min = `${min} °C`;
            current = `${current} °C`;
        }

        return { max, min, current };
    }, [tempUnit, tempMinInCelsius, tempMaxInCelsius, currentTempInCelsius]);

    if (!weatherData) {
        return (
            <Flex flexDirection="column" alignItems="center"  mt="16px">
                <Oval 
                    height = "30"
                    width = "30"
                    color = 'var(--gray-blue)'
                    secondaryColor="var(--current-line)"
                    ariaLabel = 'three-dots-loading'     
                />
                <Text variant="h5" color="var(--white)" textAlign="center">
                    Loading Weather Data...
                </Text>
            </Flex>
        )
    }

    return (
        <Flex 
            mt="16px" 
            backgroundColor="var(--current-line)"
            borderRadius="5px"
            p="16px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Text variant="h4" fontWeight="bold" color="var(--white)">
                Today's Forecast in { city }
            </Text>

            <Text color="var(--cyan)"  variant="h1" fontWeight="bold">
                { temp.current }
            </Text>

            <Flex>
                <Text color="var(--red)" variant="h5">
                    min. {temp.min} 
                </Text>

                <Text color="var(--white)" variant="h5">&nbsp;|&nbsp;</Text>

                <Text color="var(--green)" variant="h5">
                    max. {temp.max}
                </Text>                    
            </Flex>

            <Text color="var(--white)" variant="h5" fontWeight="bold">
                { conditions?.toUpperCase() }
            </Text>

            <ConversionButton
                onClick={() => setTempUnit(
                    tempUnit === 'celsius' ? 'farenheit' : 'celsius'
                )}
            >
                <Text 
                    color="var(--white)" 
                    variant="h4"
                    fontWeight="bold"
                >
                    Convert to { tempUnit === 'celsius' ? 'Farenheit' : 'Celsius' }
                </Text>
            </ConversionButton>

        </Flex>
    );
}