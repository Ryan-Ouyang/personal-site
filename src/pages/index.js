import React from "react"
import { graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components';

import GlobalWrapper from "../components/globalwrapper"
import Hero from "../components/hero/hero"
import About from "../components/about/about"
//import Timeline from "../components/timeline/timeline"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Oxygen:300,400,600,700&display=swap');

    html {
        height: 100%;
        background-color: #fffff4
    }

    body {
        font-family: 'Oxygen', sans-serif;
        height: 100%;

        overflow-x: hidden
    }
`

const Index = ({data}) => {
    //console.log(data)
    return(
        <GlobalWrapper>
            <GlobalStyle />
            <Hero />
            <About headshot={data.headshot.childImageSharp.fluid}/>
            {/* <Timeline /> */}
        </GlobalWrapper>
    )
}

// For the headshot in the about section
export const query = graphql`
    query {
        headshot: file(relativePath: { eq: "ProfilePictureAlmostSquare.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Index;
