/**
*
* VendorMarker
*
*/

import React, {PropTypes} from 'react';


class VendorMarker extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const K_WIDTH = 40;
    const K_HEIGHT = 40;
    const markerStyle = {
      position: 'absolute',
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,

      border: '5px solid #5975BB',
      borderRadius: K_HEIGHT,
      backgroundColor: 'white',
      textAlign: 'center',
      color: '#3f51b5',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 4
    }
    return (
       <div style={markerStyle}>
          {this.props.text}
       </div>
    );
  }
}

export default VendorMarker;
