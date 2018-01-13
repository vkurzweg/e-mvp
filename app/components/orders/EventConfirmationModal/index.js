/**
*
* EventConfirmationModal
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

function EventConfirmationModal(props) {
  // handle capture payment error
  let displayError;
  props.isCaptureFailed ? displayError = 'block' : displayError = 'none';
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Book Event Confirmation"
      >
        <img src={X} alt="exit icon" onClick={props.closeModal} style={{ float: 'right', cursor: 'pointer' }} />
        <p style={{ textAlign: 'center' }}>Book this event? Your card will be charged.</p>
        <button className="btn btn-success" style={{ marginLeft: '35%', marginRight: '10%', backgroundColor: '#2FBA90' }} onClick={props.onEventConfirm}>Accept</button>
        <p style={{ display: displayError, color: 'red', textAlign: 'center' }}>Payment confirmation error. Please try again.</p>
      </Modal>
    </div>
  );
}

export default EventConfirmationModal;
