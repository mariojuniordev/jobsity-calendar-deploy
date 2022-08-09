import styled from "styled-components";
import { SCREEN_SIZE } from "../../data/data";

export const Container = styled.aside`
    padding: 16px;
    border: 1px solid var(--current-line);
    
    @media(max-width: ${SCREEN_SIZE.xs}) {
        width: 100%;
    }
`;