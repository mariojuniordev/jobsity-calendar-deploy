import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    padding: 32px;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);


`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
    border-radius: 8px;
    background-color: var(--current-line);
    box-shadow: 10px 10px 24px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 24px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 24px -2px rgba(0,0,0,0.75);
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
    padding: 2px 4px 2px 4px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    input {
        background-color: var(--current-line);
        padding-top: 3px;
        padding-bottom: 2px;
        border: 0;
        width: 100%;
        border-bottom: 1px solid var(--white);
        margin-top: 16px;
        color: var(--white);

        ::placeholder {
            color: #808080;
        }

        :focus {
            outline: none;
            border-bottom: 1px solid var(--cyan);
        }


    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 3px;
    margin-top: 8px;
    padding-left: 16px;
    padding-right: 16px;
`;