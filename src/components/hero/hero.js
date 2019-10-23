import React from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"

import {device} from "../../utils/media-queries"

const HeroSection = styled.section`
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #fffff4

    padding: 150px 100px;
    @media ${device.desktop} { padding: 150px 100px }
    @media ${device.laptop} { padding: 150px 100px }
    @media ${device.tablet} { padding: 100px 70px }
    @media ${device.mobile} { padding: 70px 50px }
`

const Hey = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;

    @media ${device.desktop} { font-size: 2.5rem; }
    @media ${device.laptop} { font-size: 2.25rem; }
    @media ${device.tablet} { font-size: 2.00rem; }
    @media ${device.mobile} { font-size: 1.75rem; }
`

const Tagline = styled.h1`
    font-size: 2.25rem;
    font-weight: 300;
    max-width: 750px;

    @media ${device.desktop} { font-size: 2.5rem; max-width: 750px; }
    @media ${device.laptop} { font-size: 2.25rem; max-width: 600px; }
    @media ${device.tablet} { font-size: 2.00rem; max-width: 500px; }
    @media ${device.mobile} { font-size: 1.75rem; max-width: 325px; }
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
                <Tagline>I'm Ryan Ouyang, a&nbsp;
                <TextLoop>
                    <span>blockchain aficionado</span>
                    <span>guitarist</span>
                    <span>mech keyboard enthusiast</span>
                </TextLoop>
                 <br></br>and aspiring developer studying Computer Science at the University of Waterloo</Tagline>
                <ContactMe>Hit Me Up! --></ContactMe>
            </HeroSection>
        )
    }
}