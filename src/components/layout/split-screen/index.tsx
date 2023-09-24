// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ horizontal: boolean, height: string }>`
    display: flex;
    flex-direction: ${props => (props.horizontal ? 'column' : 'row')};
    height: ${props => props.height};
`;

const Pane = styled.div<{ weight: number }>`
    flex: ${props => props.weight};
`;

interface SplitScreenProps {
    children: React.ReactNode[];
    firstWeight?: number;
    secondWeight?: number;
    horizontal?: boolean;
    height?: string;
}

const SplitScreen: React.FC<SplitScreenProps> = ({
    children,
    firstWeight = 1,
    secondWeight = 1,
    horizontal = false,
    height = 'auto'
}: SplitScreenProps) => {
    const [Left, Right] = children;

    return (
        <Container horizontal={horizontal} height={height}>
            <Pane weight={firstWeight}>
                {Left}
            </Pane>
            <Pane weight={secondWeight}>
                {Right}
            </Pane>
        </Container>
    );
};

export default SplitScreen;