import React from "react"
import styled from "styled-components"

import { device } from "../../utils/media-queries"

import TwoColumns from '../twocolumns';
import SectionHeading from '../sectionheading';

const AboutSection = styled.section`
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

export default class About extends React.Component {
    render() {
        return (
            <AboutSection>
                <TwoColumns 
                    leftColumn={
                        <SectionHeading>About</SectionHeading>
                    }
                    rightColumn={
                        <p>
                            I'm currently studying Computer Science at the University of Waterloo.
                            <br></br>
                            I was a technical development intern at <a href="http://jonahgroup.com">The Jonah Group</a> writing smart contracts and assisting with devops on Hyperledger fintech projects centered in fintech. I'm also a hackathon addict, with 10 under my belt and counting.
                            <br></br>
                            In my free time, I play piano, guitar, and sing mostly blues, rock and metal music. In the winter you can find me on ski hills, bombing down steep trails that frighten my parents.
                        </p>
                    }
                />
            </AboutSection>
        )
    }
}
