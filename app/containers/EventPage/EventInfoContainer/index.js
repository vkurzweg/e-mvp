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
      <p style={{ fontStyle: 'bold', fontSize: '18px', marginBottom: '1em' }}>New Event Details:</p>
          <SelectField
            hintText="Occasion"
            value={this.props.occasion}
            onChange={this.handleOccasionChange}
            onTouchTap={this.onTouchTap}
          >
            <MenuItem value={'Birthday'} primaryText="Birthday" />
            <MenuItem value={'Kid Birthday'} primaryText="Kid Birthday" />
            <MenuItem value={'Office Party'} primaryText="Office Party" />
            <MenuItem value={'Baby Shower'} primaryText="Baby Shower" />
            <MenuItem value={'Just Because'} primaryText="Just Because" />
          </SelectField>
          <DatePicker
            hintText="Date"
            style={{ backgroundColor: 'transparent' }}
            defaultDate={this.props.startDate}
            onChange={this.handleDateChange}
          />
        <div style={{ marginLeft: '-35%' }}>
          <div style={{ display: 'inline-flex', marginTop: '1em', marginBottom: '1em' }}>
            <TextField
              hintText="Event Address"
              style={{ marginRight: '1em' }}
              onChange={this.handleAddressChange}
              value={this.props.address}
            />
            <TextField
              hintText="City"
              onChange={this.handleCityChange}
              value={this.props.city}
            />
            <br />
          </div>
          <div style={{ display: 'inline-flex' }}>
            <SelectField
              hintText="State"
              value={this.props.eventLocState}
              onChange={this.handleStateChange}
              onTouchTap={this.onTouchTap}
              style={{ marginRight: '1em' }}
            >
              <MenuItem value={'CA'} primaryText="California" />
            </SelectField>
            <TextField
              hintText="Zipcode"
              defaultValue={this.props.zipCode}
              onChange={this.handleZipChange} />
            <br />
          </div>
        </div>
        <p style={{ display: displayError, color: 'red', padding: '3%'}}>Unable to create event. Please try again.</p>
      </div>
    );
  }
}

export default EventInfo;
