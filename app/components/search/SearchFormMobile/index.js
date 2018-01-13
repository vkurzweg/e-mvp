/**
*
* ZipInput
*
*/

import React from 'react';
// import FormButton from 'components/onboard/FormButton';
import FormWrapper from './FormWrapper';
import FlexContainer from './FlexContainer';
import E from 'assets/images/E_50_sky.png';
import Chevron from 'assets/images/chevron.png';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';


const OCCASIONS = require('../../../data/occasions');

const styles = {
  customWidth: {
    width: 20,
  },
};

class OnboardFormWeb extends React.Component {

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
    console.log('date', date)
    this.props.setDate(date);
  }

  handleZipChange(event, zip) {
    console.log('zip', zip)
    this.props.setZip(zip);
  }

  render() {
    return (
      <div style={{}}>
        <FormWrapper className="container">
          <FlexContainer>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <div>
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
            <div style={{ display: 'flex', flexDirection: 'row', padding: '.25em' }}>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <DatePicker
                  hintText="Date"
                  onChange={this.handleDateChange}
                  value={this.props.startDate}
                />
              </MuiThemeProvider>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '.25em' }}>
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
          </FlexContainer>
        </FormWrapper>
       </div>

    );
  }
}

OnboardFormWeb.propTypes = {
  setOccasion: React.PropTypes.func.isRequired,
  selectValue: React.PropTypes.object,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
};


export default OnboardFormWeb;
