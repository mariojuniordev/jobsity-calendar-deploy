import styled from "styled-components";
import { SCREEN_SIZE } from "../../data/data";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    
    @media(min-width: ${SCREEN_SIZE.xs}) {
        display: none;
    }
`