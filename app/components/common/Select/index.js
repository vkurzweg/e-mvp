/**
*
* Select
*
*/

import React from 'react';


class Select extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatchFunction(this.props.data, this.props.values[0].value)
  }

  handleChange(evt) {
    console.log('select change');
    // handle state change/ dispatch redux actions
    console.log('select event index:', evt.target)
    this.props.dispatchFunction(evt.target.getAttribute('id'), evt.target.value)
  }

  render() {
    let content = (<option>--</option>);
    const valuesAndLabels = this.props.values;
    content = valuesAndLabels.map((value, idx, values) => {
      return <option key={idx} value={value.value} label={value.label} data={this.props.index}/>
    })
    return (
      <div style={this.props.style}>
        <select
          id={this.props.data}
          onChange={this.handleChange}
          className={this.props.className}
          placeholder={this.props.placeholder} >
          {content}
        </select>
      </div>
    );
  }
}

export default Select;
