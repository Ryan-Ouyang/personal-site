import React from "react"
import styled from "styled-components"

import Img from "gatsby-image"

import { device } from "../../utils/media-queries"

import TwoColumns from "../twocolumns"

const AboutSection = styled.section`
    p:first-child {
        margin-top: 0;
    }

    box-sizing: border-box;
    max-width: 1440px;
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
    }
    @media ${device.mobile} {
        padding: 20px 50px;
    }
`

const Headshot = styled(Img)`
    border-radius: 50%;
    max-width: 80%;
    margin: 0 auto;
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
                                I'm currently in my first year of Computer Science at the
                                University of Waterloo.{" "}
                            </Bio>
                            <Bio>
                                Previously at{" "}
                                <a href="http://jonahgroup.com">
                                    The Jonah Group
                                </a>{" "}
                                writing smart contracts and assisting with
                                devops on Hyperledger fintech projects. Hackathon addict with 10 projects and counting.
                            </Bio>
                            <Bio>
                                In my free time, I play piano, guitar, and sing
                                mostly blues and rock music. In the winter you can try to catch me on the slopes.
                            </Bio>
                        </BioContainer>
                    }
                />
            </AboutSection>
        )
    }
}
