/**
*
* EventDropdown
*
*/

import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import moment from 'moment';
import { fromJS } from 'immutable';


class EventDropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    let userEvents;
    (this.props.events) ? userEvents = this.props.events : userEvents = fromJS([]);
    return (
      <div style={{ marginLeft: '20%', marginBottom: '2%' }}>
        <SelectField
          onChange={this.props.onEventChange}
          onTouchTap={this.onTouchTap}
          hintText="Filter messages by event"
        >
          {userEvents.map( (event, idx) => {
            const date = moment(event.get('date')).format('MM/DD/YY');
            const occasion = event.get('occasion');
            return <MenuItem key={idx} value={event.get('_id')} primaryText={`${occasion} on ${date} `} />
          })}
        </SelectField>
      </div>
    );
  }
}

export default EventDropdown;
