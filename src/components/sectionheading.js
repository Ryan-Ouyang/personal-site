import React from 'react';
import styled from 'styled-components';

import { device } from '../utils/media-queries';

const SectionHeading = props => {
    return(
        <h2>{props.children}</h2>
    )
}

export default SectionHeading;