import styled from "styled-components";
import { SCREEN_SIZE } from "../../data/data";

export const CalendarHeader = styled.header`

`;

export const ArrowsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-right: 8px;

    @media(max-width: ${SCREEN_SIZE.xs}) {
        display: none;
    }
`
export const TodayButton = styled.button`
    border: 1px solid var(--cyan);
    background-color: var(--background);
    padding: 8px;
    margin: 24px;
    border-radius: 5px;

    @media(max-width: ${SCREEN_SIZE.xs}) {
        margin: 0px;
    }
`


