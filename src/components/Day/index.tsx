import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext/GlobalContext";
import { DayProps } from "../../dtos/day";
import { DayEvent } from "../../dtos/events";
import { DayWeather } from "../DayWeather";
import { Flex } from "../UI/Flex";
import { Text } from "../UI/Text";
import { Container } from "./style";

export function Day({ day }: DayProps) {
    const [dayEvents, setDayEvents] = useState<DayEvent[] | []>([]);

    const isToday = day.format("DD--MM--YY") === dayjs().format("DD--MM--YY");

    const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } = useContext(GlobalContext);

    useEffect(() => {
        const events = savedEvents.filter(
            evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
        );
        setDayEvents(events);
    }, [savedEvents, day]);

    return (
        <Container 
            onClick={() => {
                setDaySelected(day);
                setShowEventModal(true);
            }}
        >
            <Flex flexDirection="column" alignItems="center" >
                <Text mt="1px" color="var(--white)">
                    { day.format('ddd').toUpperCase() } 
                </Text>
                
                <Flex
                    backgroundColor={isToday ? 'var(--green)': ''}
                    borderRadius="50px"
                    height="30px"
                    width="30px"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text
                        p="1px" 
                        m="1px" 
                        textAlign="center" 
                        color={isToday ? 'var(--background)' : "var(--white)"}
                        borderRadius="50px"
                    >
                        { day.format('DD') }
                    </Text>
                </Flex>
            </Flex>
            {dayEvents.map((evt, index) =>
                <Flex 
                    onClick={() => setSelectedEvent(evt)}
                    key={index} 
                    backgroundColor={evt.label}
                    alignItems="center" 
                    justifyContent="center"  
                    flexDirection="column"
                    p="1px 4px 1px 4px"
                    width="100%"
                    mt="2px"
                >
                        <Text 
                            variant="h5"
                            color="var(--background)" 
                            textAlign="center"
                            fontWeight={'bold'}
                        >
                            { evt.title }
                            <br/>
                            { evt.time }
                            <br/>
                            { evt.city }
                        </Text>

                        <DayWeather 
                            city={ evt.city } 
                            date={ dayjs(evt.day).format('YYYY-MM-DD') }
                        />
                </Flex>
            )}

        </Container>
    )
}