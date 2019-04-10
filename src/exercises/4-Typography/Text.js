import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

/**
 * A component to render all text in the app.
 */
const getFontSize = variant =>
	({
		primary: 'xxl',
		secondary: 'm',
		tertiary: 's',
		error: 'm',
	}[variant]);

console.log(getFontSize('primary'));
const getColor = variant =>
	({
		base: 'base',
		secondary: 'secondary',
		tertiary: 'secondary',
		error: 'error',
	}[variant]);

const Text = styled.p`
	margin: 0;
	line-height: ${themeGet('lineHeights.base')};
	font-family: ${themeGet('fonts.base')};
	font-size: ${props => props.theme.fontSizes[getFontSize(props.variant)]};
	color: ${props => props.theme.colors[getColor(props.variant)]};
`;

Text.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'error']),
	children: PropTypes.node,
};

Text.defaultProps = {
	variant: 'primary',
};

/** @component */
export default Text;
