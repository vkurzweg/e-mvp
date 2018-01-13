/**
*
* ConfirmationSuccessModal
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
    padding: '2em',
    width: '70%'
  },
};

function ConfirmationSuccessModal(props) {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Book Event Confirmation"
      >
        <img src={X} alt="exit icon" onClick={props.closeModal} style={{ display: 'block', cursor: 'pointer', marginLeft: '85%', marginBottom: '5%' }} />
        <p style={{ textAlign: 'center' }}>Success! Your event is booked.</p>
        <div style={{ display: 'block', margin: '0 auto'}}>
          <button className="btn btn-success" style={{ display: 'inline-block', marginLeft: '10%', marginBottom: '5%', backgroundColor: '#2FBA90', width: '12em' }} onClick={props.onCreateEvent}>Create a New Event</button>
          <button className="btn btn-danger" style={{ display: 'inline-block', marginLeft: '10%', backgroundColor: '#BDBEBD', width: '12em', border: 'none' }} onClick={props.closeModal}>Dismiss</button>
        </div>
      </Modal>
    </div>
  );
}

export default ConfirmationSuccessModal;
