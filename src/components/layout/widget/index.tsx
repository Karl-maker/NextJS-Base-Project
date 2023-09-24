// @ts-nocheck
import React from "react";
import styled from 'styled-components';

const OuterWidget = styled.div<{ 
    borderRadius: string, 
    borderWidth: string, 
    borderColor: string,
    padding: string,
    backgroundColor: string
}>`
    padding: ${props => props.padding};
    margin: 0px;
    height: 100%;
    box-sizing: border-box; /* Ensure padding is included within the height */
    background-color: ${props => props.backgroundColor};
`;

const Widget = styled.div<{ 
    borderRadius: string, 
    borderWidth: string, 
    borderColor: string,
    padding: string,
    backgroundColor: string
}>`
    border-radius: ${props => props.borderRadius};
    border: ${props => props.borderWidth} solid ${props => props.borderColor};
    padding: ${props => props.padding};
    height: 100%;
    box-sizing: border-box; /* Ensure padding is included within the height */
    background-color: ${props => props.backgroundColor};
`;

interface WidgetWrapperProps {
    children: React.ReactNode;
    borderWidth?: string;
    borderRadius?: string;
    borderColor?: string;
    innerPadding?: string;
    innerBackgroundColor?: string;
    backgroundColor?: string;
    padding?: string;
}

/**
 * WidgetWrapper Component
 *
 * This component provides a wrapper with customizable styling options for a child widget.
 *
 * @component
 *
 * @param {React.ReactNode} children - The content to be wrapped.
 * @param {string} borderRadius - The border radius of the outer container.
 * @param {string} borderWidth - The border width of the inner widget.
 * @param {string} borderColor - The border color of the inner widget.
 * @param {string} innerPadding - The padding of the inner widget.
 * @param {string} padding - The padding of the outer container.
 * @param {string} innerBackgroundColor - The background color of the inner widget.
 * @param {string} backgroundColor - The background color of the outer container.
 *
 * @returns {React.ReactNode} The wrapped content with customizable styling.
 *
 * @example
 * // Usage example:
 * <WidgetWrapper
 *   borderRadius="15px"
 *   borderWidth="2px"
 *   borderColor="blue"
 *   innerPadding="10px"
 *   padding="5px"
 *   innerBackgroundColor="white"
 *   backgroundColor="lightgray"
 * >
 *   <p>Hello, Widget!</p>
 * </WidgetWrapper>
 */

const WidgetWrapper: React.FC<WidgetWrapperProps> = ({ 
    children,
    borderRadius = '15px',
    borderWidth = '0',
    borderColor = 'transparent',
    innerPadding = '10px',
    padding = '5px',
    innerBackgroundColor = 'transparent',
    backgroundColor = 'transparent'
 }: WidgetWrapperProps) => {
    return <OuterWidget 
        padding={padding}
        backgroundColor={backgroundColor}
    >
        <Widget 
            borderRadius={borderRadius}
            borderWidth={borderWidth}
            borderColor={borderColor}
            padding={innerPadding}
            backgroundColor={innerBackgroundColor}
        >
            {children}
        </Widget>
    </OuterWidget>
}

export default WidgetWrapper;
