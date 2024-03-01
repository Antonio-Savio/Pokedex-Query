import styled from "styled-components";

const Heading = styled.header`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: var(--transition-time);

    @media (max-width: 420px) {
        padding-top: 75px;
    }
`

const Img = styled.img`
    width: 230px;
`

export { Heading, Img }