import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    padding: 16px;

    button {
        transition: 0.3s;

        :hover {
            filter: brightness(0.9);
        }
    }
`

export const BackgroundImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
`

export const TextContainer = styled.p`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
    color: var(--white);
    max-width: 500px;
    font-size: 24px;
    font-weight: bold;
`

