/**
*
* ZipInput
*
*/

import React from 'react';
import Party from 'assets/images/popper_sc.png';
import Calendar from 'assets/images/calendar_sc.png';
import Pin from 'assets/images/map-marker_sc.png';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Button from './Button';


const OCCASIONS = require('../../../data/occasions');

const styles = {
  customWidth: {
    width: 20,
  },
};

class SearchFormMobileLanding extends React.Component {

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
      <div className="container" style={{ marginTop: '5%' }} >
        <div className="row" style={{ margin: '0 auto', textAlign: 'center', marginBottom: '1em' }}>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div style={{ marginTop: '-1em' }}>
              <SelectField
                hintText="Occasion"
                value={this.props.occasion}
                onChange={this.handleOccasionChange}
                onTouchTap={this.onTouchTap}
                style={styles}
              >
                <MenuItem value={'Birthday'} primaryText="Birthday" />
                <MenuItem value={'Kid Birthday'} primaryText="Kid Birthday" />
                <MenuItem value={'Office Party'} primaryText="Office Party" />
                <MenuItem value={'Baby Shower'} primaryText="Baby Shower" />
                <MenuItem value={'Just Because'} primaryText="Just Because" />
              </SelectField>
            </div>
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <DatePicker
              hintText="Date"
              onChange={this.handleDateChange}
            />
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div>
              <TextField
                hintText="Zipcode"
                defaultValue={this.props.zipCode}
                onChange={this.handleZipChange} />
              <br />
            </div>
          </MuiThemeProvider>
          <Button className="btn btn-success" onClick={this.props.handleClickParty}>Find Vendors</Button>
        </div>
      </div>
    );
  }
}

SearchFormMobileLanding.propTypes = {
  setOccasion: React.PropTypes.func,
  selectValue: React.PropTypes.object,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  occasion: React.PropTypes.string,
};


export default SearchFormMobileLanding;
