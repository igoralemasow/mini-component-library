import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        height: 8,
        radius: 4,
    },
    medium: {
        height: 12,
        radius: 4,
    },
    large: {
        height: 24,
        radius: 8,
        padding: 4,
    },
};

const ProgressBar = ({value, size}) => {
    const styles = STYLES[size];

    if (!styles) {
        throw new Error(`Unknown size passed to ProgressBar: ${size}`);
    }

    return (
        <Container
            role='progressbar'
            aria-valuenow={value}
            aria-valuemin='0'
            aria-valuemax='100'
            style={{'--radius': styles.radius + 'px', '--padding': styles.padding + 'px'}}
        >
            <BarContainer>
                <Bar style={{'--width': value + '%', '--height': styles.height + 'px'}} />
            </BarContainer>
            <VisuallyHidden>{value}%</VisuallyHidden>
        </Container>
    );
};

export default ProgressBar;

const Container = styled.div`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    padding: var(--padding);
`;

const BarContainer = styled.div`
    border-radius: 4px;
    overflow: hidden;
`;

const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
`;
