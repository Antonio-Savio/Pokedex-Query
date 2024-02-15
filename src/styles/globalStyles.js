import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --lighter-color: #F4F4F4;
        --darkless-color: #292929;
        --grey-color: #777777;
        --icon-color: #ff0;
        --transition-time: 0.2s;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: unset;
    }
`

export { GlobalStyles }