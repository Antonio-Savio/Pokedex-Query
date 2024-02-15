import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: var(--grey-color);
    position: absolute;
    right: 30px;
    top: 30px;

    @media (max-width: 420px) {
        right: 50%;
        transform: translateX(50%);
    }
`

const Span = styled.span`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: var(--lighter-color);
    transition: var(--transition-time);
    position: absolute;

    &.darkMode {
        transform: translateX(25px);
        z-index: 1;
    }
    
`

const MoonIcon = styled(FaMoon)`
    color: var(--icon-color);
    margin-left: 5px;
    transform: scale(1.4);
`

const SunIcon = styled(FaSun)`
    color: var(--icon-color);
    margin-right: 5px;
    transform: scale(1.4);
`

export { Button, Span, SunIcon, MoonIcon }