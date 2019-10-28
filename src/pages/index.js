import React from "react"
import { createGlobalStyle } from 'styled-components';

import Hero from "../components/hero/hero"
import About from "../components/about/about"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Oxygen:300,400,700&display=swap');

    html {
        height: 100%;
        background-color: #fffff4
    }

    body {
        font-family: 'Oxygen', sans-serif;
        height: 100%;
    }
`

export default class App extends React.Component {
    render() {
        return(
            <>
                <GlobalStyle />
                <Hero />
                {/* <About /> */}
            </>
        )
    }
}
