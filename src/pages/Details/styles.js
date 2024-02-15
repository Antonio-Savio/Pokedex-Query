import styled from "styled-components";

const Body = styled.body`
    height: 100vh;
    background-color: ${({theme}) => theme.background};
    transition: var(--transition-time);
`

export { Body }