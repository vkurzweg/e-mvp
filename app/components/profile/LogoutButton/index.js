/**
*
* LogoutButton
*
*/

import React, { PropTypes, Children } from 'react';
import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';


function LogoutButton(props) {
  let button = (
    <Wrapper>
      <A href={props.href} onClick={props.onClick}>
        {Children.toArray(props.children)}
      </A>
    </Wrapper>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  return (
    <div>
      {button}
    </div>
  );
}

LogoutButton.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default LogoutButton;
