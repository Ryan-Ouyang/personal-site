import React from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"

import { device } from "../../utils/media-queries"

const HeroSection = styled.section`
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1440px;
    margin: 0 auto;

    padding: 150px 100px;
    @media ${device.desktop} {
        padding: 150px 100px;
    }
    @media ${device.laptop} {
        padding: 150px 100px;
    }
    @media ${device.tablet} {
        padding: 100px 70px;
    }
    @media ${device.mobile} {
        padding: 70px 50px;
    }

    span: {
        white-space: pre;
    }
`

const Hey = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;

    @media ${device.desktop} {
        font-size: 2.5rem;
    }
    @media ${device.laptop} {
        font-size: 2.25rem;
    }
    @media ${device.tablet} {
        font-size: 2rem;
    }
    @media ${device.mobile} {
        font-size: 1.75rem;
    }
`

const Tagline = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    max-width: 750px;
    line-height: 1.6;

    @media ${device.desktop} {
        font-size: 2.5rem;
        max-width: 750px;
    }
    @media ${device.laptop} {
        font-size: 2.25rem;
        max-width: 600px;
    }
    @media ${device.tablet} {
        font-size: 2rem;
        max-width: 500px;
    }
    @media ${device.mobile} {
        font-size: 1.75rem;
        max-width: 325px;

        br {
            display: none;
        }
    }
`

const Name = styled.span`
    font-weight: 900;
`

const ContactMe = styled.h1`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.9;
`

const Email = styled.a`
    href: "mailto:contact@ryanouyang.me";
    target: "_blank";

    //Highlight taken from Misha Heesakkers: https://codepen.io/MishaHahaha/pen/AXxYKQ
    cursor: pointer;
    position: relative;
    text-decoration: none;
    display: inline-block;
    color: black;
    padding: 0 1px;
    transition: color ease 0.3s;

    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 10%;
        left: 0;
        bottom: 0;
        background-color: #87ceeb;
        transition: all ease 0.3s;
    }

    &:hover {
        color: black;

        &::after {
            height: 105%;
        }
    }
`

const InlineEmoji = styled.span.attrs({
    role: "img",
})`
    font-size: 2.5rem;
    font-weight: 1.5rem;
`

const LoopingText = styled.span`
    display: inline-block;
`

const StyledTextLoop = styled(TextLoop)`
    @media ${device.mobile} {
        display: block;
    }
`

export default class Hero extends React.Component {
    render() {
        return (
            <HeroSection>
                <Hey>Hey there!</Hey>
                <Tagline>
                    I'm <Name>Ryan</Name>, a{" "}
                    <StyledTextLoop interval={2000}>
                        <LoopingText>blockchain aficionado <InlineEmoji aria-label="web">🕸</InlineEmoji></LoopingText>
                        <LoopingText>keyboard enthusiast <InlineEmoji aria-label="computer-keyboard">⌨️</InlineEmoji></LoopingText>
                        <LoopingText>guitar noodler <InlineEmoji aria-label="guitar">🎸</InlineEmoji></LoopingText>
                        <LoopingText>gelato connaisseur <InlineEmoji aria-label="ice-cream">🍨</InlineEmoji></LoopingText>
                    </StyledTextLoop>
                    {" "}<br></br>and aspiring developer studying CS at the
                    University of Waterloo{" "}
                    <InlineEmoji aria-label="rocket">🚀</InlineEmoji>
                </Tagline>
                <ContactMe>
                    Feel free to reach out &nbsp;
                    <InlineEmoji aria-label="pointer-right">
                        👉
                    </InlineEmoji>{" "}
                    &nbsp;
                    <Email>contact@ryanouyang.me</Email>
                </ContactMe>
            </HeroSection>
        )
    }
}
