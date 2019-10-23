import React from "react"
import { createGlobalStyle } from 'styled-components';

import Hero from "../components/hero/hero"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');

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
            </>
        )
    }
}
