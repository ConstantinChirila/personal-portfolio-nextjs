import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
    @font-face {
        font-family: 'Brandon';
        src: url("./../styles/fonts/brandon.woff") format("woff")
    }

    @font-face {
        font-family: 'Brandon Med';
        src: url("./../styles/fonts/brandon-med.woff") format("woff")
    }

    @font-face {
        font-family: 'Brandon Bold';
        src: url("./../styles/fonts/brandon-bold.woff") format("woff")
    }

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        margin: 0;
        padding: 0;
    }

    html {
        position: relative;
        min-height: 100%;
        font-size: 62.5%;
    }
    ::selection, ::-moz-selection, ::-webkit-selection {
        background: #333;
        color: #fff;
        text-shadow: none;
    }

    body {
        font-family: ${({ theme }) => theme.font.family.base};
        font-size: 1.6rem;
        font-style: normal;
        font-weight: ${({ theme }) => theme.font.weight.regular};;
        line-height: 1.4;
        color: ${({ theme }) => theme.colors.lightText};;
        background: ${({ theme }) => theme.colors.background};
    }
  
    img {
        width: 100%;
    }

    b {
        font-weight: ${({ theme }) => theme.font.weight.bold};
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.font.family.headerReg};
        color: #fff;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        letter-spacing: -0.01em;
        font-style: normal;
        margin: 0 0 1rem;
        color: ${({ theme }) => theme.colors.primary};
        text-transform: none;
    }

    h1 {
        font-size:4rem;
    }

    h2 {
        font-size: 3rem;
    }

    h3, h4, h5, h6 {
        font-size: 2.2rem;
    }

    p {
        margin:0 0 1rem 0;
        line-height: 1.8;
    }

    a {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary};
        transition: all 0.3s ease-in-out;

        &:hover, &:focus {
            text-decoration: none;
        }
    }

    main {
        position: relative;
        z-index: 2;
    }
`
