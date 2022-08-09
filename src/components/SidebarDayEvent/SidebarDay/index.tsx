import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../context/GlobalContext/GlobalContext";
import { DayProps } from "../../../dtos/day";
import { DayEvent } from "../../../dtos/events";
import { DayWeather } from "../../DayWeather";
import { Flex } from "../../UI/Flex";
import { Text } from "../../UI/Text";
import { Container } from "./style";

export function SidebarDay({ day }: DayProps) {
    const [dayEvents, setDayEvents] = useState<DayEvent[] | []>([]);

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
                    borderRadius="5px"
                >
                        <Text 
                            variant="h5"
                            color="var(--background)" 
                            textAlign="center"
                            fontWeight={'bold'}
                        >
                            { day.format('DD MMMM YYYY') }
                            <br/>
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