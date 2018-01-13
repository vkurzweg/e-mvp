/**
*
* Input
*
*/

import React from 'react';


class Input extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(evt) {
    console.log('input blur change');
    console.log('evt target', evt.target.value)
    this.props.dispatchFunction(evt.target.getAttribute('data'), evt.target.value)
    // handle state change/ dispatch redux actions
  }

  render() {
    return (
      <div style={this.props.style}>
        <input
          className={this.props.className}
          placeholder={this.props.placeholder}
          onBlur={this.onBlur.bind(this)}
          data={this.props.data} />
      </div>
    );
  }
}

// TODO: add prop types

export default Input;
