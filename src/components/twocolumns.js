import React from 'React';
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
    flex-grow: 1;
`

const RightColumn = styled(Column)`
    flex-grow: 2;
`

export default class TwoColumns extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Container>
                <LeftColumn>{this.props.leftColumn}</LeftColumn>
                <RightColumn>{this.props.rightColumn}</RightColumn>
            </Container>
        )
    }
}