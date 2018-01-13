import React from 'react';
import { connect } from 'react-redux';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { browserHistory } from 'react-router';

const muiTheme = getMuiTheme({
  stepper: {
    iconColor: '#75B2DF',
  },
});

export class StepperContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleStep1Click = this.handleStep1Click.bind(this);
    this.handleStep2Click = this.handleStep2Click.bind(this);
    this.handleStep3Click = this.handleStep3Click.bind(this);
  }

  handleStep1Click() {
    browserHistory.push('/vendors')
    this.setState({stepIndex: 0})
  }

  handleStep2Click() {
    this.setState({stepIndex: 1})
    browserHistory.push('/vendors/caterers')
  }

  handleStep3Click() {
    this.setState({stepIndex: 2})
    browserHistory.push('/orders')
  }

  render() {
    const contentStyle = { margin: '0 16px' };
    return (
      <div style={{ display: 'block', width: '40%', margin: '0 auto' }}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Stepper
            linear={false}
            activeStep={this.props.stepIndex}
            connector={null}
            orientation="vertical"
            style={{ fontFamily: 'Raleway', textAlign: 'left' }}>
            <Step style={{ height: '45px' }}>
              <StepButton onClick={this.handleStep1Click}>
                Select a vendor category
              </StepButton>
            </Step>
            <Step style={{ height: '45px' }}>
              <StepButton onClick={this.handleStep2Click}>
                Select a vendor
              </StepButton>
            </Step>
            <Step style={{ height: '45px' }}>
              <StepButton onClick={this.handleStep3Click}>
                Order for your event!
              </StepButton>
            </Step>
          </Stepper>
        </MuiThemeProvider>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(StepperContainer);
