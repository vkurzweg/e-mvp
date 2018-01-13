import React, { PropTypes } from 'react';
import P from './P';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Input from 'components/common/Input';
import Select from 'components/common/Select';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  display: block;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

const style = {
  height: 150,
  width: 450,
  marginBottom: 10,
  marginTop: 10,
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  display: 'block',
  backgroundColor: '#FAFAFA',
};

const styleButton = {
  margin: 20,
  backgroundColor: '7986CB',
  };

function Product(props) {
  console.log('props', props)
  let display = 'block';
  (props.isFormActive) ? display = 'block' : display = 'none';
  return (
    <div className="container" style={{ display: 'block', margin: '0 auto', width: '100%', position: 'relative', marginBottom: '-30px' }} >
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <StyledPaper style={style} zDepth={1} onClick={props.toggleForm}>
          <div className="row" style={{ display: 'inline', marginLeft: '20px' }}>
            <div className="col-xs-3">
              <img
                src={props.product.photos[0]}
                alt="placeholder"
                style={{ height: '65px', marginTop: '25%', verticalAlign: 'top' }}
              />
            </div>
            <div className="col-xs-8" style={{ marginLeft: '5%', marginTop: '5%' }}>
              <div style={{ display: 'inline-block', marginLeft: '2em', verticalAlign: 'top' }}>
                <h5 style={{ fontWeight: 'bold' }}>{props.product.name}</h5>
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
           style={{ display: 'block', width: '100%', marginLeft: '50%', paddingBottom: '10%' }}>
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
