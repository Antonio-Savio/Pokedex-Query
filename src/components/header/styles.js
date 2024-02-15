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
`

const Img = styled.img`
    width: 230px;

    @media (max-width: 420px) {
        margin-top: 60px;
    }
`

export { Heading, Img }