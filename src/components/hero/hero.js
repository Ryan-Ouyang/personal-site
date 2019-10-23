import React from "react"
import styled from "styled-components"

const HeroSection = styled.section`
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100vw;
    margin: 0 auto
    padding: 150px 0px 150px 100px
    background-color: #fffff4
`

const Hey = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
`

const Tagline = styled.h1`
    font-size: 2.25rem;
    font-weight: 300;
    max-width: 750px;
`

const ContactMe = styled.h1`
    font-size: 1.25rem;
    font-weight: 400;
`

export default class Hero extends React.Component {
    render () {
        return(
            <HeroSection>
                <Hey>Hey!</Hey>
                <Tagline>I'm Ryan Ouyang, a blockchain enthusiast and aspiring developer studying Computer Science at the University of Waterloo</Tagline>
                <ContactMe>Hit Me Up! --></ContactMe>
            </HeroSection>
        )
    }
}