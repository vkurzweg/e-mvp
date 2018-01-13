/**
*
* ZipInput
*
*/

import React from 'react';
import Formsy from 'formsy-react';
import FormWrapper from './FormWrapper';
import FormButton from 'components/search/FormButton';
import InputWrapper from './InputWrapper';
import DatepickerWrapper from './DatepickerWrapper';
import OccasionWrapper from './OccasionWrapper';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

const OCCASIONS = require('../../../data/occasions');

const StyledSelect = styled(Select)`
  margin: 0 auto;
  width: 12em;
`;

const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #D8D8D8;
  background: white;
  border-radius: 5px;
  height: 35px;
  width: 12em;
  padding-left: 10px;

  &:hover {
    border; 1px solid #73B1E1;
  }
`;

class OnboardForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(date) {
    this.props.setDate(date);
  }

  updateValue(newValue) {
    console.log(newValue);
    this.props.setOccasion(newValue);
  }

  handleInputChange(event) {
    this.props.setZip(event.target.value);
  }

  submit() {
    console.log('Form submitted');
  }

  render() {
    const options = OCCASIONS.data;
    return (
      <div>
        <FormWrapper>
          <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} >
            <OccasionWrapper>
              <h3>What&#39;s the occasion?</h3>
              <StyledSelect
                placeholder="Select"
                value={this.props.selectValue}
                onChange={this.updateValue}
                options={options}
                name="occasion-type"
              />
            </OccasionWrapper>
            <DatepickerWrapper>
              <h3>Date</h3>
              <StyledDatePicker
                selected={this.props.startDate}
                placeholderText="Click to select a date"
                onChange={this.handleChange}
                className="form-control datepicker"
              />
            </DatepickerWrapper>
            <InputWrapper>
              <h3>Zip code</h3>
              <input
                name="zipCode"
                onChange={this.handleInputChange}
                value={this.props.zipCode}
                style={{ border: '1px solid #D8D8D8', borderRadius: '5px', height: '35px', width: '12em', background: 'white', color: '#828282' }}
              />
            </InputWrapper>
            <FormButton>Find Vendors</FormButton>
          </Formsy.Form>
        </FormWrapper>
      </div>
    );
  }
}

OnboardForm.propTypes = {
  setOccasion: React.PropTypes.func.isRequired,
  selectValue: React.PropTypes.object,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
};

export default OnboardForm;

// style={{ backgroundImage: `url(${Birthday})`, height: '100vh' }}
