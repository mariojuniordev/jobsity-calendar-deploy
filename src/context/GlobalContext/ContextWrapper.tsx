import dayjs from 'dayjs';
import { useEffect, useReducer, useState } from 'react';
import { ContextWrapperProps } from '../../dtos/contextWrapper';
import { DayEvent } from '../../dtos/events';
import { ReducerProps, State } from '../../dtos/reducer';
import GlobalContext from './GlobalContext';

function savedEventsReducer(state: State, { type, payload }: ReducerProps) {
    switch(type) {
        case 'push':
            return [...state, payload];
        case 'update':
            return state.map((evt) => evt.id === payload.id ? payload : evt);
        case 'delete':
            return state.filter((evt) => evt.id !== payload.id);
        default:
            throw new Error();
    }
}

function initEvents() {
    const storageEvents = localStorage.getItem('savedEvents');
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];

    return parsedEvents;
}

export default function ContextWrapper({ children }: ContextWrapperProps) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [miniCalendarMonth, setMiniCalendarMonth] = useState<number | null>(null);
    const [daySelected, setDaySelected] = useState<dayjs.Dayjs>(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<DayEvent | null>(null);

    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents);

    useEffect(() => {
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    }, [savedEvents]);

    useEffect(() => {
        if (!showEventModal) {
            setSelectedEvent(null);
        }
    }, [showEventModal]);

    useEffect(() => {
        if(miniCalendarMonth !== null) {
            setMonthIndex(miniCalendarMonth);
        }
    }, [miniCalendarMonth])

    return(
        <GlobalContext.Provider value={{
            monthIndex,
            setMonthIndex, 
            miniCalendarMonth,
            setMiniCalendarMonth,
            daySelected,
            setDaySelected ,
            showEventModal,
            setShowEventModal,
            savedEvents,
            dispatchCalEvent,
            selectedEvent,
            setSelectedEvent,
        }}>
            { children }
        </GlobalContext.Provider>
    );
}