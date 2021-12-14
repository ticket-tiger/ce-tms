import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ closeForm, children }) => (
  <div className="modal-background">
    <div className="modal">
      {children}
      <button type="button" onClick={closeForm}>
        Close
      </button>
    </div>
  </div>
);

Modal.propTypes = {
  closeForm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
