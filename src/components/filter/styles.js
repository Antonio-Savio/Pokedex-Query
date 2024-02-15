import styled from "styled-components";

const Select = styled.select`
    margin: 30px 0px;
    padding: 8px;
    font-size: 16px;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
    border: 0.8px solid #000;
    transition: var(--transition-time);
    text-transform: capitalize;

    &.darkMode {
        background-color: var(--darkless-color);
        color: var(--lighter-color);
        border-color: var(--lighter-color);
    }
`

const P = styled.p`
    color: #f00;
`

export { Select, P }