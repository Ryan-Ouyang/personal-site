import React from 'react';
import styled from 'styled-components';

import { device, contentWidth } from '../../utils/media-queries';

const TimelineSection = styled.section`
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
    }
    @media ${device.mobile} {
        padding: 20px 50px;
    }
`
export default class About extends React.Component {
    render () {
        return(
            <TimelineSection>
                <h1>Timeline</h1>
            </TimelineSection>
        )
    }
}