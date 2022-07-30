import dayjs from 'dayjs';
import { createContext } from 'react';
import { DayEvent, Labels } from '../../dtos/events';
import { GlobalContextProps } from '../../dtos/globalContext';

const GlobalContext = createContext<GlobalContextProps>({
    monthIndex: 0,
    setMonthIndex: (index: number) => {},
    miniCalendarMonth: 0,
    setMiniCalendarMonth: (index: number | null) => {},
    daySelected: dayjs(),
    setDaySelected: (day: dayjs.Dayjs | null) => {},
    showEventModal: false,
    setShowEventModal: (showModal: boolean) => {},
    dispatchCalEvent: ({ type, payload }) => {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: (value: DayEvent | null) => {},
});

export default GlobalContext;