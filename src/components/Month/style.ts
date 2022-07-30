import styled from "styled-components";

export const Grid = styled.div`
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(0, 1fr));
`