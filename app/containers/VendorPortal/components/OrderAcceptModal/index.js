/**
*
* OrderAcceptModal
*
*/

import React from 'react';
import Modal from 'react-modal';
import X from 'assets/images/exit.png';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '20px',
  },
};

function OrderAcceptModal(props) {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Order Accept Confirmation"
      >
        <img src={X} alt="exit icon" onClick={props.closeModal} style={{ float: 'right', cursor: 'pointer' }} />
        <p style={{ textAlign: 'center' }}>Accept this order from <br /> {props.customerName}?</p>
        <div style={{ display: 'inline-flex'}}>
          <button className="btn btn-success" style={{ marginRight: '3em', backgroundColor: '#2FBA90' }} onClick={props.handleConfirmOrder}>Yes</button>
          <button className="btn btn-danger" style={{ backgroundColor: '#FF7A7A' }} onClick={props.closeModal} >Dismiss</button>
        </div>
      </Modal>
    </div>
  );
}

export default OrderAcceptModal;
