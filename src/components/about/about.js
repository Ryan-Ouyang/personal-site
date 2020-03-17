import React from "react"
import styled from "styled-components"

import Img from "gatsby-image"

import { device, contentWidth } from "../../utils/media-queries"

import TwoColumns from "../twocolumns"

// const linkIconDir = "../../assets/images/linkIcons/"
// webpack importing images
import emailIcon from "../../assets/images/linkIcons/email.svg" // Email, resume icons made by Freepik: https://www.flaticon.com/authors/freepik
import resumeIcon from "../../assets/images/linkIcons/resume.svg"
import githubIcon from "../../assets/images/linkIcons/github.svg" // From simpleicons.org
import linkedinIcon from "../../assets/images/linkIcons/linkedin.svg"
import devpostIcon from "../../assets/images/linkIcons/devpost.svg"

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
    @media ${device.mobile} {
        max-width: 70%;
    }
`

const BioContainer = styled.div`
    padding-left: 50px @media ${device.tablet} {
        padding-left: 0px;
    }
`

const Bio = styled.p`
    font-size: 1.4rem;
    font-weight: 300;

    @media ${device.desktop} {
        font-size: 1.4rem;
    }
    @media ${device.laptop} {
        font-size: 1.2rem;
    }
    @media ${device.tablet} {
        font-size: 1.4rem;
    }
    @media ${device.mobile} {
        font-size: 1.1rem;
    }
`

const BioBold = styled(Bio)`
    font-weight: 600;
`

const Hyperlink = styled.a`
    color: black;
`

const LinkContainer = styled.div`
    display: inline-block;
`

const LinkIconImg = styled.img`
    width: 30px;
    cursor: pointer;

    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;

    @media ${device.mobile} {
        margin-left: 10px;
        margin-right: 10px;
    }
`

const LeftmostLinkIconImg = styled(LinkIconImg)`
    margin-left: 5px;

    @media ${device.mobile} {
        margin-left: 0px;
    }
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
                            <BioBold>
                                Currently in my first year of Computer Science
                                at the University of Waterloo and working on a
                                layer 1{" "}
                                <Hyperlink
                                    href="https://devpost.com/software/connexion-vy3a9c"
                                    target="_blank"
                                >
                                    messaging solution
                                </Hyperlink>{" "}
                                for Ethereum. Launched{" "}
                                <Hyperlink
                                    href="https://mangodev.io"
                                    target="_blank"
                                >
                                    mangodev.io
                                </Hyperlink>
                                {","} an Algorand asset manager.
                            </BioBold>
                            <Bio>
                                Previously at{" "}
                                <Hyperlink href="http://jonahgroup.com">
                                    The Jonah Group
                                </Hyperlink>{" "}
                                writing typescript smart contracts and assisting
                                with devops on Hyperledger fintech projects.
                                Hackathon addict with 10 projects and counting.
                            </Bio>
                            <Bio>
                                In my free time, I play piano, guitar, and sing
                                mostly blues and rock music. In the winter you
                                can try to catch me on the slopes with my
                                wonderful family!
                            </Bio>
                            <LinkContainer>
                                <a href="mailto:contact@ryanouyang.com">
                                    <LeftmostLinkIconImg
                                        src={emailIcon}
                                        alt="Email Icon"
                                        title="Email"
                                    />
                                </a>
                                <a href="http://bit.ly/ryanouyang-resume">
                                    <LinkIconImg
                                        src={resumeIcon}
                                        alt="Resume Icon"
                                        title="Resume"
                                    />
                                </a>
                                <a href="https://github.com/ryan-ouyang">
                                    <LinkIconImg
                                        src={githubIcon}
                                        alt="Github Icon"
                                        title="Github"
                                    />
                                </a>
                                <a href="https://linkedin.com/in/ryan-ouyang">
                                    <LinkIconImg
                                        src={linkedinIcon}
                                        alt="Linkedin Icon"
                                        title="Linkedin"
                                    />
                                </a>
                                <a href="https://devpost.com/RyanOuyang">
                                    <LinkIconImg
                                        src={devpostIcon}
                                        alt="Devpost Icon"
                                        title="Devpost"
                                    />
                                </a>
                            </LinkContainer>
                        </BioContainer>
                    }
                />
            </AboutSection>
        )
    }
}
