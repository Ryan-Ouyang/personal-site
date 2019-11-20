import React from 'react';
import styled from 'styled-components';

import { device, contentWidth } from '../../utils/media-queries';

import TimelineElement from './timelineElement'

const TimelineSection = styled.section`
    p:first-child {
        margin-top: 0;
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
    }
    @media ${device.mobile} {
        padding: 20px 50px;
    }
`

export default class Timeline extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            timelineFilterParam: "trolling"
        }
    }

    render () {
        const posts = [
            { name: "Ryan", category: "hackathon" },
            { name: "Alice", category: "trolling" },
            { name: "Bob", category: "hackathon" }
        ]

        return(
            <TimelineSection>
                {posts.filter(post => post.category === this.state.timelineFilterParam)
                .map((post, i) => {
                    return <TimelineElement name={post.name} key={i}/>
                })}
            </TimelineSection>
        )
    }
}