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
    return (
      <div className="container" style={{ display: 'block', marginLeft: '8%', width: '80%', marginTop: '1em' }} >
        <p style={{ textAlign: 'center', marginTop: '-2%', marginBottom: '-2%' }}>Search for vendors by occasion, date, and zipcode:</p>
        <div className="row" style={{ margin: '0 auto', display: 'block' }}>

          <div className="col-sm-4">
            <div className="container-fluid" style={{ marginTop: '2.5em' }} >
              <div className="row">
                <div className="col-xs-2">
                  <img src={Party} alt="party emoji" style={{ marginBottom: '5%' }} />
                </div>
                <div className="col-xs-10">
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div style={{ textAlign: 'center', marginTop: '-1em' }}>
                      <SelectField
                        hintText="Occasion"
                        value={this.props.occasion}
                        onChange={this.handleOccasionChange}
                        onTouchTap={this.onTouchTap}
                        style={{width: '150px', marginLeft: '5%'}}
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

          <div className="col-sm-4">
            <div className="container-fluid" style={{ marginTop: '2.5em' }} >
              <div className="row">
                <div className="col-xs-2">
                  <img src={Calendar} alt="calendar" style={{ marginBottom: '5%'}} />
                </div>
                <div className="col-xs-10">
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <DatePicker
                      hintText="Date"
                      onChange={this.handleDateChange}
                      value={this.props.startDate}
                      style={{width: '100%', minWidth: '150px', marginLeft: '5%', marginRight: '5%'}}
                      textFieldStyle={{width: '150px', textAlign: 'center'}}
                      />
                  </MuiThemeProvider>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="container-fluid" style={{ marginTop: '2.5em' }} >
              <div className="row">
                <div className="col-xs-2">
                 <img src={Pin} alt="map pin" style={{ marginBottom: '5%', marginLeft: '5%' }} />
                </div>
                <div className="col-xs-10">
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                      <TextField
                        hintText="Zipcode"
                        defaultValue={this.props.zipCode}
                        onChange={this.handleZipChange}
                        style={{width: '150px', marginLeft: '3%', marginRight: '5%'}}/>
                      <br />
                    </div>
                  </MuiThemeProvider>
                </div>
              </div>
            </div>
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
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  occasion: React.PropTypes.string,
};


export default SearchFormWeb;
