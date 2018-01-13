/**
*
* CreateEvent
*
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';


class EventInfo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleOccasionChange = this.handleOccasionChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  handleOccasionChange(event, index, value) {
    this.props.setOccasion(value);
  }

  handleDateChange(event, date) {
    this.props.setDate(date);
  }

  handleZipChange(event, zip) {
    this.props.setZip(zip);
  }

  handleNameChange(event, hostName) {
    this.props.setHostName(hostName);
  }

  handleAddressChange(event, address) {
    this.props.setAddress(address);
  }

  handleCityChange(event, city) {
    this.props.setCity(city)
  }

  handleStateChange(event, index, value) {
    this.props.setEventState(value)
  }

  render() {
    let displayError;
    this.props.isCreateFailed ? displayError = 'block' : displayError = 'none'
    return (
      <div>
        <SelectField
          hintText="Occasion"
          value={this.props.occasion}
          onChange={this.handleOccasionChange}
          onTouchTap={this.onTouchTap}
          style={{ width: '150px' }}
        >
          <MenuItem value={'Birthday'} primaryText="Birthday" />
          <MenuItem value={'Kid Birthday'} primaryText="Kid Birthday" />
          <MenuItem value={'Office Party'} primaryText="Office Party" />
          <MenuItem value={'Baby Shower'} primaryText="Baby Shower" />
          <MenuItem value={'Just Because'} primaryText="Just Because" />
        </SelectField>
        <div style={{ display: 'inline-flex'}}>
          <DatePicker
            hintText="Date"
            textFieldStyle={{ width: '150px', marginRight: '1em' }}
            onChange={this.handleDateChange}
          />
          <TextField
            hintText="Host Name"
            onChange={this.handleNameChange}
            style={{ width: '150px' }}
          />
        </div>
        <div style={{ display: 'block', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', marginTop: '1em', marginBottom: '1em' }}>
            <TextField
              hintText="Event Address"
              onChange={this.handleAddressChange}
              style={{ marginRight: '1em', width: '150px' }}
            />
            <TextField
              hintText="City"
              onChange={this.handleCityChange}
              style={{ width: '150px' }}
            />
            <br />
          </div>
          <div style={{ display: 'inline-flex' }}>
            <SelectField
              hintText="State"
              value={this.props.eventLocState}
              onChange={this.handleStateChange}
              onTouchTap={this.onTouchTap}
              style={{ marginRight: '1em', width: '150px' }}
            >
              <MenuItem value={'CA'} primaryText="California" />
            </SelectField>
            <TextField
              hintText="Zipcode"
              defaultValue={this.props.zipCode}
              onChange={this.handleZipChange}
              style={{ width: '150px' }}
            />
            <br />
          </div>
        </div>
        <p style={{ display: displayError, color: 'red', padding: '3%'}}>Unable to create event. Please try again.</p>
      </div>
    );
  }
}

export default EventInfo;
