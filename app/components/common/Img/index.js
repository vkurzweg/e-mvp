/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';

function Img(props) {
  return (
    <div>
      <img className={props.className} src={props.src} alt={props.alt} />
    </div>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Img;
