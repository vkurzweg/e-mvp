import React, { PropTypes } from 'react';
import P from './P';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Input from 'components/common/Input';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  &:hover {
    cursor: pointer;
  }
`;

const styles = {
  height: 200,
  width: '50%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#FAFAFA',
};

const styleButton = {
  margin: 20,
  backgroundColor: '7986CB',
  };

function Product(props) {
  let display = 'block';
  (props.isFormActive) ? display = 'block' : display = 'none';
  return (
    <div className="container" style={{ position: 'relative', marginBottom: '-30px' }} >
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <StyledPaper style={styles} zDepth={1} onClick={props.toggleForm}>
          <div className="row" style={{ marginTop: '3em', width: '100%' }}>
            <div className="col-xs-offset-1 col-xs-3">
              <img
                src={props.product.photos[0]}
                alt="placeholder"
                style={{ width: '100%', minWidth: '100px', height: '120px', verticalAlign: 'top' }}
              />
            </div>
            <div className="col-xs-8">
              <div style={{ display: 'inline-block', marginLeft: '2em', verticalAlign: 'top', position: 'relative' }}>
                <h4 style={{ fontWeight: 'bold' }}>{props.product.name}</h4>
              <P>{props.product.desc}</P>
              <P>{props.product.desc2}</P>
              <P>{props.product.desc3}</P>
              </div>
            </div>
          </div>
        </StyledPaper>
        </MuiThemeProvider>
        <div
          className="row"
          style={{ display }}>
          <div
            className="container"
            style={{ display: 'block', width: '100%', marginLeft: '15em' }}>
            <div className="row">
              <Input
                className="form-control"
                placeholder="Quantity"
                style={{ width: '7em', display: 'inline-block' }}
                dispatchFunction={props.setProductQuantity}
                data={props.index}
                />
              <button
                id={props.index}
                data={JSON.stringify(props.product)}
                onClick={props.onAddClick}
                className="btn btn-success"
                style={{ backgroundColor: '#7986CB', border: 'none', marginLeft: '1em' }} >
                Add
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  toggleForm: PropTypes.func,
  isFormActive: PropTypes.bool,
};

export default Product;
