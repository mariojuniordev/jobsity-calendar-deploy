import { DayEvent } from './events';
import { ReducerProps } from './reducer';
import dayjs from "dayjs";

export interface GlobalContextProps {
    monthIndex: number;
    setMonthIndex: (index: number) => void;
    miniCalendarMonth: number | null;
    setMiniCalendarMonth: (index: number | null) => void;
    daySelected: dayjs.Dayjs;
    setDaySelected: (day: dayjs.Dayjs) => void;
    showEventModal: boolean;
    setShowEventModal: (showModal: boolean) => void;
    dispatchCalEvent: ({ type, payload }: ReducerProps) => void;
    savedEvents: DayEvent[] | [];
    selectedEvent: DayEvent | null;
    setSelectedEvent: (evt: DayEvent | null) => void;
}