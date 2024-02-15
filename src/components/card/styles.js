import styled from "styled-components";

const Main = styled.main`
    background-color: ${({theme}) => theme.background};
    transition: var(--transition-time);
    display: flex;
    flex-direction: column;
    align-items: center
`

const Ul = styled.ul` 
    padding: 0px 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    margin-bottom: 25px;
`

const Li = styled.li`
    min-width: 190px;
    background-color: var(--lighter-color);
    padding: 20px 15px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
    transition: var(--transition-time);

    &:hover {
        transform: scale(1.025);
    }

    &.darkMode {
        background-color: var(--darkless-color);
        color: var(--lighter-color);
    }
`

const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    width: fit-content;
    border: 0.8px solid;
    padding: 8px;
    border-radius: 15px;
`

const Img = styled.img`
    width: 100px;
    margin: 15px 0px 30px;
`

const Number = styled.p``

const Name = styled.h3`
    text-transform: capitalize;
`

const Types = styled.ul`
    display: flex;
    justify-content: center;
    gap: 10px;
`

const Type = styled.li`
    padding: 8px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    &::first-letter{
        text-transform: uppercase;
    }

    &.grass {
        background-color: #6d0;
    }

    &.poison {
        background-color: #b1f;
    }
    
    &.fire {
        background-color: #f70;
    }

    &.flying {
        background-color: #8bd;
    }
    
    &.water {
        background-color: #3bf;
    }

    &.bug {
        background-color: #9b0;
    }
    
    &.normal {
        background-color: #b2b2b2;
    }

    &.electric {
        background-color: #e0e000;
    }

    &.ground {
        background-color: #a51;
    }

    &.fairy {
        background-color: #faa;
    }

    &.fighting {
        background-color: #d11;
    }

    &.rock {
        background-color: #772;
    }

    &.psychic {
        background-color: #f101f1;
    }

    &.steel {
        background-color: #778;
    }

    &.ghost {
        background-color: #659;
    }

    &.ice {
        background-color: #2df;
    }

    &.dragon {
        background-color: #08c;
    }

    &.dark {
        background-color: #546;
    }
`

export { Img, Main, Li, Ul, Info, Number, Name, Types, Type }