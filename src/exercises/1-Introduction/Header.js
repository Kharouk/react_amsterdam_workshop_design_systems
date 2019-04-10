import React from 'react';
import PropTypes from 'prop-types';

/**
 * The most complex button.
 */
const Header = ({ children, ...props }) => {
	return <nav {...props}>{children}</nav>;
};
