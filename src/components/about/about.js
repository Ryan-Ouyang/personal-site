import React from "react"
import styled from "styled-components"

import { device } from "../../utils/media-queries"

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

const TwoColumns = styled.div`
    display: flex;
    flex-direction: row;

    @media ${device.tablet} {
        flex-direction: column;
    }
`

const Column = styled.div``

const LeftColumn = styled(Column)`
    flex-grow: 3;
    background-color: #ddd;
`

const RightColumn = styled(Column)`
    flex-grow: 8;
    background-color: #eee;
`

export default class About extends React.Component {
    render() {
        return (
            <AboutSection>
                <TwoColumns>
                    <LeftColumn>
                        <h1>test</h1>
                    </LeftColumn>
                    <RightColumn>
                        <h1>test</h1>
                    </RightColumn>
                </TwoColumns>
            </AboutSection>
        )
    }
}
