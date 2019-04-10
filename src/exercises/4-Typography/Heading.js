import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, themeGet } from 'styled-system';
// Space attaches itself from our theme and can replace 'm' and 'padding'
// Below, we have manually defined ML and MR, and space does it by its own
// can also work with padding

/**
 * A text heading.
 */
const Heading = styled.h1`
	${space};
	/* margin: ${props => props.theme.space[props.m]}; */
	/* margin-top: ${props => props.theme.space[props.mt]}; */
	/* margin-right: ${props => props.theme.space[props.mr]}; */
	margin-left: ${props => props.theme.space[props.ml]};
	margin-bottom: ${props => props.theme.space[props.mb]};
	line-height: 1.2;
	font-weight: ${props => props.theme.headingFontWeights[props.size]};
	font-size: ${props => themeGet(`fontSizes.${props.size}`)};
	color: ${themeGet('colors.base')};
	font-family: ${themeGet('fonts.heading')};
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxxl', 'xxl', 'xl', 'l', 'm']),
	/** Set custom margin */
	m: PropTypes.number,
	/** Set custom margin-top */
	// mt: PropTypes.number,
	/** Set custom margin-right */
	mr: PropTypes.number,
	/** Set custom margin-left */
	ml: PropTypes.number,
	/** Set custom margin-bottom */
	mb: PropTypes.number,
	children: PropTypes.node,
};

Heading.defaultProps = {
	m: 0,
	size: 'xxl',
};

/** @component */
export default Heading;
