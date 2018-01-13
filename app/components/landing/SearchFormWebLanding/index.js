/**
*
* ZipInput
*
*/

import React from 'react';
import Party from 'assets/images/popper_jordy.png';
import Calendar from 'assets/images/calendar.png';
import Pin from 'assets/images/pin.png';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Button from './Button';

const OCCASIONS = require('../../../data/occasions');

class SearchFormWebLanding extends React.Component {

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
    this.props.setDate(date);
  }

  handleZipChange(event, zip) {
    this.props.setZip(zip);
  }

  render() {
    const options = OCCASIONS.data;
    return (
      <div className="container-fluid" style={{ marginTop: '5%', marginBottom: '3%' }} >
        <div className="row" style={{ margin: '0 auto', display: 'inline-flex -webkit-inline-flex' }}>
          <div className="col-sm-3">
            <div className="container-fluid" style={{ marginTop: '2.5em' }} >
              <div className="row">
                <div className="col-xs-2">
                  <img src={Party} alt="party emoji" />
                </div>
                <div className="col-xs-10">
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div style={{ textAlign: 'center', marginTop: '-1em' }}>
                      <SelectField
                        hintText="Occasion"
                        value={this.props.occasion}
                        onChange={this.handleOccasionChange}
                        onTouchTap={this.onTouchTap}
                        style={{display: 'block', width: '100%', minWidth: '150px'}}
                      >
                        <MenuItem value={'Birthday'} primaryText="Birthday" />
                        <MenuItem value={'Kid Birthday'} primaryText="Kid Birthday" />
                        <MenuItem value={'Office Party'} primaryText="Office Party" />
                        <MenuItem value={'Baby Shower'} primaryText="Baby Shower" />
                        <MenuItem value={'Just Because'} primaryText="Just Because" />
                      </SelectField>
                    </div>
                  </MuiThemeProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="container-fluid" style={{ marginTop: '2.5em' }} >
              <div className="row">
                <div className="col-xs-2">
                  <img src={Calendar} alt="calendar" />
                </div>
                <div className="col-xs-10">
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div style={{ textAlign: 'center' }}>
                      <DatePicker
                        hintText="Date"
                        onChange={this.handleDateChange}
                        style={{width: '100%', minWidth: '150px'}}
                        textFieldStyle={{width: '100%', minWidth: '150px'}}
                      />
                    </div>
                  </MuiThemeProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="container-fluid" style={{ marginTop: '2.5em' }} >
              <div className="row">
                <div className="col-xs-2">
                  <img src={Pin} alt="map pin" />
                </div>
                <div className="col-xs-10">
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                      <TextField
                        hintText="Zipcode"
                        defaultValue={this.props.zipCode}
                        onChange={this.handleZipChange}
                        style={{width: '100%', minWidth: '150px'}} />
                      <br />
                    </div>
                  </MuiThemeProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="container-fluid" style={{ marginTop: '10%', marginRight: '5%' }} >
              <div className="row">
                <div className="col-xs-12">
                  <Button className="btn btn-success" onClick={this.props.handleClickParty}>Find Vendors</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchFormWebLanding.propTypes = {
  setOccasion: React.PropTypes.func,
  selectValue: React.PropTypes.object,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  occasion: React.PropTypes.string,
};


export default SearchFormWebLanding;
