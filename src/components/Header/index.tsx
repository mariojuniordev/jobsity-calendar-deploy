import { Heading } from "../UI/Heading";
import { CalendarHeader, ArrowsContainer, TodayButton} from "./style";
import CalendarIcon from "./assets/calendar.svg"
import ArrowLeft from "./assets/arrow-left.svg";
import ArrowRight from "./assets/arrow-right.svg";
import { Flex } from "../UI/Flex";
import { Button } from "../UI/Button";
import { Text } from "../UI/Text";
import { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../../context/GlobalContext/GlobalContext";

export function Header() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1)
    }

    function handleNextMonth() {
        setMonthIndex(monthIndex + 1)
    }

    function handleReset() {
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month())
    }
    
    return (
        <CalendarHeader>
            <Flex p="16px" alignItems="center" justifyContent="space-between">
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                    <img src={CalendarIcon} alt="Calendar Icon" height={50} width={50}/>
                    <Heading variant="h5" color="var(--white)">Calendar</Heading>
                </Flex>

                <Heading color="var(--white)" variant="h2" textAlign="center">
                    { dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY") }
                </Heading>

                <Flex>
                    <TodayButton onClick={handleReset}>
                        <Text color="var(--cyan)">Today</Text>
                    </TodayButton>

                    <ArrowsContainer>
                            <Button borderRadius="50px" onClick={handlePrevMonth} backgroundColor="var(--background)">
                                <img src={ArrowLeft} alt="Arrow Left" height={20} width={20}/>
                            </Button>

                            <Button borderRadius="50px" onClick={handleNextMonth} backgroundColor="var(--background)">
                                <img src={ArrowRight} alt="Arrow Right" height={20} width={20}/>
                            </Button>
                    </ArrowsContainer>
                </Flex>
            </Flex>
        </CalendarHeader>
    )
}