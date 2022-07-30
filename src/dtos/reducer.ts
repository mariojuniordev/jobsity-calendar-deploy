import { DayEvent } from './events';
export type State = DayEvent[];

export interface ReducerProps {
    type: string;
    payload: DayEvent;
}