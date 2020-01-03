import React from "react"
import styled from "styled-components"

import Img from "gatsby-image"

import { device, contentWidth } from "../../utils/media-queries"

import TwoColumns from "../twocolumns"

const AboutSection = styled.section`
    p:first-child {
        margin-top: 0.5rem;
    }

    box-sizing: border-box;
    max-width: ${contentWidth};
    margin: 0 auto;

    padding: 20px 100px;
    @media ${device.desktop} {
        padding: 20px 100px;
    }
    @media ${device.laptop} {
        padding: 20px 100px;
    }
    @media ${device.tablet} {
        padding: 20px 70px;
        p:first-child {
            margin-top: 2rem;
        }
    }
    @media ${device.mobile} {
        padding: 20px 50px;
    }
`

const Headshot = styled(Img)`
    border-radius: 50%;
    max-width: 80%;
    margin: 0 auto;

    @media ${device.tablet} {
        max-width: 50%;
    }
`

const BioContainer = styled.div`
    padding-left: 50px

    @media ${device.tablet} {
        padding-left: 0px
    }
`

const Bio = styled.p`
    font-size: 1.5rem;
    font-weight: 300;

    @media ${device.desktop} {
        font-size: 1.5rem
    }
    @media ${device.laptop} {
        font-size: 1.2rem
    }
    @media ${device.tablet} {
        font-size: 1.4rem
    }
    @media ${device.mobile} {
        font-size: 1.1rem
    }
`

const Hyperlink = styled.a`
    color: black
`

export default class About extends React.Component {
    render() {
        return (
            <AboutSection>
                <TwoColumns
                    leftColumn={
                        <Headshot fluid={this.props.headshot}></Headshot>
                    }
                    rightColumn={
                        <BioContainer>
                            <Bio>
                                Currently in my first year of Computer Science at the
                                University of Waterloo and working on a layer 1 <Hyperlink href="https://devpost.com/software/connexion-vy3a9c">messaging solution</Hyperlink> for Ethereum.{" "}
                            </Bio>
                            <Bio>
                                Previously at{" "}
                                <Hyperlink href="http://jonahgroup.com">
                                    The Jonah Group
                                </Hyperlink>{" "}
                                writing typescript smart contracts and assisting with
                                devops on Hyperledger fintech projects. Hackathon addict with 10 projects and counting.
                            </Bio>
                            <Bio>
                                In my free time, I play piano, guitar, and sing
                                mostly blues and rock music. In the winter you can try to catch me on the slopes with my wonderful family!
                            </Bio>
                        </BioContainer>
                    }
                />
            </AboutSection>
        )
    }
}
