import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SickButton = styled.button`
	background: ${props => props.theme.colors.primary};
	border-color: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.bg};
	font-family: ${props => props.theme.fonts.base};
	font-size: ${props => props.theme.fontSizes.base};
	padding: 8px 16px;
	border-radius: ${props => props.theme.radii.base};

	&:hover {
		background-color: ${props => props.theme.colors.hover};
		border-color: ${props => props.theme.colors.hover};
	}

	&:active {
		background: ${props => props.theme.colors.error};
	}

	&:focus {
		transform: rotate(10800deg);
		transition: 5s;
	}
`;

/**
 * One button to push them all.
 */
const Button = ({ children, ...props }) => {
	return <SickButton {...props}>{children}</SickButton>;
};

Button.propTypes = {
	/** Button label */
	children: PropTypes.node,
};

// Tell Styleguidist that we're exporting a React component (to see PropTypes docs
// for styled-components)
/** @component */
export default Button;
