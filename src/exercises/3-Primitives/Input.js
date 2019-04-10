import styled from 'styled-components';
import { themeGet } from 'styled-system';

/**
 * A basic yet rachet and hopeless input field.
 */

// have to use element index number when dealing with array to get padding
// have to use object key to get the background color!
const Input = styled.input`
	padding: ${themeGet('space.3')};
	background-color: ${themeGet('colors.bg')};
	border: 1px solid ${themeGet('colors.primary')};

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${themeGet('colors.focus')};
	}
`;

/** @component */
export default Input;
