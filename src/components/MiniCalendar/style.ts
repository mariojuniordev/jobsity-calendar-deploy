import styled from "styled-components";
import { SCREEN_SIZE } from "../../data/data";

export const Container = styled.div`
    margin-top: 9px;
`;

export const DesktopArrowsContainer = styled.div`
    display: flex;

    @media(max-width: ${SCREEN_SIZE.xs}) {
        display: none;
    }
`

export const MobileArrowsContainer = styled.div`
    display: none;

    @media(max-width: ${SCREEN_SIZE.xs}) {
        display: flex;
        gap: 1rem;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(6, minmax(0, 1fr));
    gap: 8px;
    align-items: center;
    justify-items: center;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: ${SCREEN_SIZE.xs}) {
        gap: 1rem;
    }
`;