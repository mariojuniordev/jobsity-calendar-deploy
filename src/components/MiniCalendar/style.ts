import styled from "styled-components";

export const Container = styled.div`
    margin-top: 9px;
`;

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
`;