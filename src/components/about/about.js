import React from "react"
import styled from "styled-components"

import { device } from "../../utils/media-queries"

import TwoColumns from '../twocolumns';

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
                        <h1>About</h1>
                    }
                    rightColumn={
                        <p>Hey!</p>
                    }
                />
            </AboutSection>
        )
    }
}
