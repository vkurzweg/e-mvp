/**
*
* ErrorModal
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

function ErrorModal(props) {
  return (
    <div>
      <Modal
        errorModalIsOpen={props.errorModalIsOpen}
        onRequestClose={props.closeErrorModal}
        style={customStyles}
        contentLabel="Create Order Error"
      >
        <img src={X} alt="exit icon" onClick={props.closeModal} style={{ float: 'right', cursor: 'pointer' }} />
        <p style={{ textAlign: 'center' }}>We're sorry, there was a problem creating your order. Please try again.</p>
      </Modal>
    </div>
  );
}

export default ErrorModal;
