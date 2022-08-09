import styled from "styled-components";
import { SCREEN_SIZE } from "../../data/data";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--current-line);
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    :hover {
        background-color: var(--current-line);
    }

    @media (max-width: ${SCREEN_SIZE.xs}) {
        p {
            font-size: 12px;
        }
    }        
`

export const EventsContainer = styled.div`
    max-height: 110px;
    overflow-y: scroll;
    margin-top: 0.5rem;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--gray-blue);
    }

    ::-webkit-scrollbar-track {
        background-color: var(--current-line);
    }
`