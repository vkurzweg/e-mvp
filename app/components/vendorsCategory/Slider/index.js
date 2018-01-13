/**
*
* Slider
*
*/

import React from 'react';
import InputRange from 'react-input-range';


class Slider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      values: { min: 1, max: 2 },
    };
    this.labelFormat = this.labelFormat.bind(this);
  }

  labelFormat(value) {
    switch (value) {
      case 1:
        return '$';
      case 2:
        return '$$';
      case 3:
        return '$$$';
      case 4:
        return '$$$$';
      default:
        return '$';
    }
  }

  render() {
    return (
      <div>
        <InputRange
          maxValue={4}
          minValue={1}
          step={1}
          value={this.props.budgetValues}
          onChange={this.props.setBudget}
          formatLabel={this.labelFormat}
        />
      </div>
    );
  }
}

export default Slider;

// <p style={{ fontSize: '13px', textAlign: 'center', marginTop: '.75em' }}>How much would you like to spend?</p>

