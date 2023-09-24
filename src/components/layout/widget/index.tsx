import React from "react";
import styled from 'styled-components';

const OuterWidget = styled.div<{ 
    outerBorderRadius: string, 
    outerBorderWidth: string, 
    outerBorderColor: string,
    outerPadding: string,
    outerBackgroundColor: string
}>`
    padding: ${props => props.outerPadding};
    margin: 0px;
    height: 100%;
    box-sizing: border-box; /* Ensure padding is included within the height */
    background-color: ${props => props.outerBackgroundColor};
`;

const Widget = styled.div<{ 
    innerBorderRadius: string, 
    innerBorderWidth: string, 
    innerBorderColor: string,
    innerPadding: string,
    innerBackgroundColor: string
}>`
    border-radius: ${props => props.innerBorderRadius};
    border: ${props => props.innerBorderWidth} solid ${props => props.innerBorderColor};
    padding: ${props => props.innerPadding};
    height: 100%;
    box-sizing: border-box; /* Ensure padding is included within the height */
    background-color: ${props => props.innerBackgroundColor};
`;

interface WidgetWrapperProps {
    children: React.ReactNode;
    outerBorderWidth?: string;
    outerBorderRadius?: string;
    outerBorderColor?: string;
    innerPadding?: string;
    innerBackgroundColor?: string;
    outerBackgroundColor?: string;
    outerPadding?: string;
}

/**
 * WidgetWrapper Component
 *
 * This component provides a wrapper with customizable styling options for a child widget.
 *
 * @component
 *
 * @param {React.ReactNode} children - The content to be wrapped.
 * @param {string} outerBorderRadius - The border radius of the outer container.
 * @param {string} outerBorderWidth - The border width of the outer container.
 * @param {string} outerBorderColor - The border color of the outer container.
 * @param {string} innerPadding - The padding of the inner widget.
 * @param {string} innerBackgroundColor - The background color of the inner widget.
 * @param {string} outerBackgroundColor - The background color of the outer container.
 * @param {string} outerPadding - The padding of the outer container.
 *
 * @returns {React.ReactNode} The wrapped content with customizable styling.
 *
 * @example
 * // Usage example:
 * <WidgetWrapper
 *   outerBorderRadius="15px"
 *   outerBorderWidth="2px"
 *   outerBorderColor="blue"
 *   innerPadding="10px"
 *   outerPadding="5px"
 *   innerBackgroundColor="white"
 *   outerBackgroundColor="lightgray"
 * >
 *   <p>Hello, Widget!</p>
 * </WidgetWrapper>
 */
const WidgetWrapper: React.FC<WidgetWrapperProps> = ({ 
    children,
    outerBorderRadius = '15px',
    outerBorderWidth = '0',
    outerBorderColor = 'transparent',
    innerPadding = '10px',
    outerPadding = '5px',
    innerBackgroundColor = 'transparent',
    outerBackgroundColor = 'transparent'
 }: WidgetWrapperProps) => {
    return <OuterWidget 
        outerPadding={outerPadding}
        outerBackgroundColor={outerBackgroundColor}
    >
        <Widget 
            innerBorderRadius={outerBorderRadius}
            innerBorderWidth={outerBorderWidth}
            innerBorderColor={outerBorderColor}
            innerPadding={innerPadding}
            innerBackgroundColor={innerBackgroundColor}
        >
            {children}
        </Widget>
    </OuterWidget>
}

export default WidgetWrapper;
