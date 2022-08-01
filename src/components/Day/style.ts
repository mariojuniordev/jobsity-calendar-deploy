import styled, { css } from "styled-components";
import { SCREEN_SIZE } from "../../data/data";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--current-line);
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    hover {
        background-color: var(--current-line);
    }

    @media (max-width: ${SCREEN_SIZE.xs}) {
        p {
            font-size: 12px;
        }
    }        
`