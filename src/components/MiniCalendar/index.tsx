import dayjs from "dayjs";
import { Fragment, useContext, useEffect, useState } from "react";
import { getMonth } from "../../utils/day";
import { Button } from "../UI/Button";
import { Flex } from "../UI/Flex";
import { Text } from "../UI/Text";
import { Container, Grid, DesktopArrowsContainer, MobileArrowsContainer } from "./style";
import SquareArrowLeft from "./assets/arrow-square-left.svg";
import SquareArrowRight from "./assets/arrow-square-right.svg";
import GlobalContext from "../../context/GlobalContext/GlobalContext";

export function MiniCalendar() {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    const { monthIndex, setMonthIndex, setMiniCalendarMonth, setDaySelected, daySelected } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex])

    function handleMiniCalendarPrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1);
    }

    function handleMiniCalendarNextMonth() {
        setCurrentMonthIdx(currentMonthIdx + 1);
    }

    function handlePrevMonthGlobally() {
        setMonthIndex(monthIndex - 1)
    }

    function handleNextMonthGlobally() {
        setMonthIndex(monthIndex + 1)
    }

    function getDayBackgroundColor(day: dayjs.Dayjs) {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        let slcDay;

        if (daySelected) {
            slcDay = daySelected?.format(format);
        }

        if (nowDay === currDay) {
            return "var(--pink)";
        }

        if (currDay === slcDay) {
            return "var(--current-line)";
        }

        return "var(--background)";
    }

    return (
        <Container>
            <Flex justifyContent="space-between" alignItems="center" mb="1rem">
                <Text color="var(--white)">
                    { dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY") }
                </Text>
                <MobileArrowsContainer>
                    <Button onClick={handlePrevMonthGlobally} ml="8px" backgroundColor="var(--background)">
                        <img height={35} width={35} src={SquareArrowLeft} alt={"previous_month"} title={"Previous month"} />
                    </Button>

                    <Button onClick={handleNextMonthGlobally} backgroundColor="var(--background)">
                        <img height={35} width={35} src={SquareArrowRight} alt={"next_month"} title={"Next month"} />
                    </Button>
                </MobileArrowsContainer>
                
                <DesktopArrowsContainer>
                    <Button onClick={handleMiniCalendarPrevMonth} ml="8px" backgroundColor="var(--background)">
                        <img height={20} width={20} src={SquareArrowLeft} alt={"previous_month"} title={"Previous month"} />
                    </Button>

                    <Button onClick={handleMiniCalendarNextMonth} backgroundColor="var(--background)">
                        <img height={20} width={20} src={SquareArrowRight} alt={"next_month"} title={"Next month"} />
                    </Button>
                </DesktopArrowsContainer>
            </Flex>

            <Grid>
                {currentMonth[0].map((day, index) =>
                    <Text fontSize="12px" color="var(--white)" key={index} pt="1px" pb="1px" textAlign="center">
                        {day.format('dd').charAt(0)}
                    </Text>
                )}
                {currentMonth.map((row, i) => 
                    <Fragment key={i}>
                        {row.map((day, idx) => 
                            <Button 
                                borderRadius="50px"
                                onClick={() => {
                                    setMiniCalendarMonth(currentMonthIdx)
                                    setDaySelected(day)
                                }}
                                key={idx} 
                                backgroundColor={getDayBackgroundColor(day)}
                                p="5px"
                                height="18px"
                                width="18px"
                            >
                                <Text textAlign="center" fontSize="12px" color="var(--white)">
                                    {day.format('D')}
                                </Text>
                            </Button>
                        )}
                    </Fragment>
                )}
            </Grid>
        </Container>
    );
};