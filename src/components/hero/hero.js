/* eslint-disable jsx-a11y/accessible-emoji */

import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import TextLoop from "react-text-loop"

// For bottom arrow
import { ChevronsDown } from "styled-icons/boxicons-regular/ChevronsDown"
import { device, contentWidth } from "../../utils/media-queries"

const HeroSection = styled.section`
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: ${contentWidth};
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
    font-size: 2.75rem;
    font-weight: 300;
    max-width: 750px;
    line-height: 1.6;

    @media ${device.desktop} {
        font-size: 2.75rem;
        max-width: 750px;
    }
    @media ${device.laptop} {
        font-size: 2.5rem;
        max-width: 700px;
    }
    @media ${device.tablet} {
        font-size: 2rem;
        max-width: 550px;
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
    font-weight: 700;
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
    padding: 0 3px;
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
    font-weight: 1.5rem;
    display: inline-block;
`

const LoopingText = styled.span`
    display: inline-block;
`

const StyledTextLoop = styled(TextLoop)`
    display: inline-block;

    @media ${device.mobile} {
        display: block;
    }
`

const BottomArrowAnimation = keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
`

// ADD styled-icons downward "learn more" arrow
const BottomArrow = styled(ChevronsDown)`
    position: absolute;

    left: 50%;
    margin-left: -17.5px;
    bottom: 5px;

    max-height: 35px;
    max-width: 35px;

    opacity: 0;

    animation-name: ${BottomArrowAnimation};
    animation-delay: 1s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
`

export default class Hero extends React.Component {
    render() {
        return (
            <section>
                <HeroSection>
                    <Hey>Hey there!</Hey>
                    <Tagline>
                        I'm <Name>Ryan</Name>, a{" "}
                        <StyledTextLoop interval={2000}>
                            <LoopingText>
                                blockchain aficionado{" "}
                                <InlineEmoji aria-label="web">🕸</InlineEmoji>
                            </LoopingText>
                            <LoopingText>
                                keyboard enthusiast{" "}
                                <InlineEmoji aria-label="computer-keyboard">
                                    ⌨️
                                </InlineEmoji>
                            </LoopingText>
                            <LoopingText>
                                guitar noodler{" "}
                                <InlineEmoji aria-label="guitar">
                                    🎸
                                </InlineEmoji>
                            </LoopingText>
                            <LoopingText>
                                gelato connaisseur{" "}
                                <InlineEmoji aria-label="ice-cream">
                                    🍨
                                </InlineEmoji>
                            </LoopingText>
                        </StyledTextLoop>{" "}
                        <br></br>and aspiring developer hacking things together
                        with cool new tech.{" "}
                        <InlineEmoji aria-label="rocket">🚀</InlineEmoji>
                    </Tagline>
                    <ContactMe>
                        Feel free to reach out &nbsp;
                        <InlineEmoji aria-label="pointer-right">
                            👉
                        </InlineEmoji>{" "}
                        &nbsp;
                        <Email href="mailto:contact@ryanouyang.com">
                            contact@ryanouyang.com
                        </Email>
                    </ContactMe>
                    <BottomArrow />
                </HeroSection>
            </section>
        )
    }
}
