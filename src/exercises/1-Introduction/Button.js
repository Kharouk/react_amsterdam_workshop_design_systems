import React from 'react';
import PropTypes from 'prop-types';

/**
 * The most complex button.
 */
const Button = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

Button.propTypes = {
	/** Button text */
	children: PropTypes.node,
};

Button.defaultProps = {
	children: 'Real button',
};

export default Button;
