import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--current-line);
    transition: 0.5s;
    cursor: pointer;

    :hover {
        background-color: var(--current-line);
    }
`