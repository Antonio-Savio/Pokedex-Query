import styled from "styled-components";

const Load = styled.button`
    border: 0.8px solid ${({theme}) => theme.background};
    outline: none;
    margin: 5px 0 30px;
    padding: 8px;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
    transition: var(--transition-time);

    &:hover {
        opacity: 0.7;
    }

    &.darkMode {
        background-color: var(--darkless-color);
        color: var(--lighter-color);
    }
`

export { Load }