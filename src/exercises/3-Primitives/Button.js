import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SickButton = styled.button`
	background: ${props =>
		props.variant === 'primary' ? props.theme.colors.primary : 'transparent'};
	border-color: ${props => props.theme.colors.primary};
	border: 1px solid ${props => props.theme.colors.primary};
	color: ${props =>
		props.variant === 'primary'
			? props.theme.colors.bg
			: props.theme.colors.primary};
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
	variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
	variant: 'secondary',
};

// Tell Styleguidist that we're exporting a React component (to see PropTypes docs
// for styled-components)
/** @component */
export default Button;
