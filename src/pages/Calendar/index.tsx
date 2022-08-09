import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { EventModal } from "../../components/EventModal";
import { Header } from "../../components/Header";
import { Month } from "../../components/Month";
import { Sidebar } from "../../components/Sidebar";
import { Flex } from "../../components/UI/Flex";
import GlobalContext from "../../context/GlobalContext/GlobalContext";
import { getMonth } from '../../utils/day'
import { Container } from "./style";

export function Calendar() {
    const [currentMonth, setCurrentMonth] = useState<dayjs.Dayjs[][]>(getMonth());

    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex]);

    return (
        <>
            {showEventModal && <EventModal/>}
            
            <Container>
                <Header/>

                <Flex flex="1 1 0%">
                    <Sidebar month={ currentMonth }/>
                    <Month month={ currentMonth }/>
                </Flex>
            </Container>
        </>
    )
}