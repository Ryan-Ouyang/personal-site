import React from 'react';
import styled from 'styled-components';

import { device } from '../utils/media-queries';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: column;
        text-align: center;
    }
`

const Column = styled.div``

const LeftColumn = styled(Column)`
    flex-basis: 33%;

    @media ${device.tablet} {
        width: 100%
    }
`


const RightColumn = styled(Column)`
    flex-basis: 67%;

    @media ${device.tablet} {
        width: 100%
    }
`

export default class TwoColumns extends React.Component {
    render() {
        return(
            <Container>
                <LeftColumn>{this.props.leftColumn}</LeftColumn>
                <RightColumn>{this.props.rightColumn}</RightColumn>
            </Container>
        )
    }
}