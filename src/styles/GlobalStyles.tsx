import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle `
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


    body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
		background-color: #E5E5E5;
    }

    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }
`