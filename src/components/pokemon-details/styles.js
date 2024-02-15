import styled, { css } from "styled-components";
import { Main, Types, Type } from "../card/styles";

const sharedStyling = css`
    &::first-letter{
        text-transform: uppercase;
    }
    margin-top: 10px;
`

const Principal = styled(Main)`
    padding: 30px
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 20px;
    background-color: var(--lighter-color);
    border-radius: 15px;
    transition: var(--transition-time);

    &.darkMode{
        background-color: var(--darkless-color);
        color: var(--lighter-color)
    }
`

const AsideWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 

const H1 = styled.h1`
    ${sharedStyling}
`

const Img = styled.img`
    max-width: 250px;

    @media (max-width: 340px) {
        max-width: 220px;
    }
`

const SideContainer = styled.div`
    max-width: 450px;  

    @media (max-width: 450px) {
        word-break: break-word;
    }
`

const Span = styled.span`
    margin-right: 15px;
    text-transform: capitalize;
`

const H3 = styled.h3`
    ${sharedStyling}
`

const H4 = styled.h4`
    ${sharedStyling}
`

const P = styled.p`
`

const TypesUl = styled(Types)`
    justify-content: start;
    margin: 10px 0;
`

const TypeList = styled(Type)``

export { Principal, Container, Img, TypeList, TypesUl, H1, H3, H4, P, SideContainer, Span, AsideWrap }