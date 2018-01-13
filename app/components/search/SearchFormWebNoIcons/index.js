/**
*
* ZipInput
*
*/

import React from 'react';
import FormWrapper from './FormWrapper';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import Party from 'assets/images/popper_sc.png';
import Calendar from 'assets/images/calendar_sc.png';
import Pin from 'assets/images/map-marker_sc.png';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';


const OCCASIONS = require('../../../data/occasions');


class SearchFormWeb extends React.Component {

  constructor(props) {
    super(props);

    this.handleOccasionChange = this.handleOccasionChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
  }

  handleOccasionChange(event, index, value) {
    this.props.setOccasion(value);
  }

  handleDateChange(event, date) {
    console.log('date',date)
    this.props.setDate(date);
  }

  handleZipChange(event, zip) {
    console.log('zip', zip)
    this.props.setZip(zip);
  }

  render() {
    const options = OCCASIONS.data;
    return (
      <div className="container" style={{ display: 'block', margin: '0 auto', marginBottom: '2em' }} >
        <div className="row" style={{ margin: '0 auto' }}>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div style={{ textAlign: 'center', marginTop: '-1em' }}>
              <SelectField
                value={this.props.occasion}
                onChange={this.handleOccasionChange}
                onTouchTap={this.onTouchTap}
                hintText="Occasion"
              >
                <MenuItem value={'Birthday'} primaryText="Birthday" />
                <MenuItem value={'Kid Birthday'} primaryText="Kid Birthday" />
                <MenuItem value={'Office Party'} primaryText="Office Party" />
                <MenuItem value={'Baby Shower'} primaryText="Baby Shower" />
                <MenuItem value={'Just Because'} primaryText="Just Because" />
              </SelectField>
            </div>
          </MuiThemeProvider>
          <div style={{ textAlign: 'center' }}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <DatePicker
                hintText="Date"
                onChange={this.handleDateChange} />
            </MuiThemeProvider>
          </div>
          <div style={{ textAlign: 'center' }}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <div>
                <TextField
                  hintText="Zipcode"
                  defaultValue={this.props.zipCode}
                  onChange={this.handleZipChange} />
                <br />
              </div>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

SearchFormWeb.propTypes = {
  setOccasion: React.PropTypes.func,
  selectValue: React.PropTypes.object,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.string,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  occasion: React.PropTypes.string,
};


export default SearchFormWeb;
