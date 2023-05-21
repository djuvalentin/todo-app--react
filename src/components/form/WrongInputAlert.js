import React from 'react';
import Alert from 'react-bootstrap/Alert';
import BootstrapIcon from '../BootsrapIcon';
import './WrongInputAlert.css';

const WrongInputAlert = props => {
  const alertClassName = `alert ${props.show ? `` : 'd-none'} d-flex m-2`;

  return (
    <Alert key="warning" variant="warning" className={alertClassName}>
      <BootstrapIcon
        bootstrapIconName="bi-exclamation-triangle"
        className="fs-3 me-2"
      />
      <p className="mt-auto mb-auto">
        List with this title already exists! Try again.
      </p>
    </Alert>
  );
};

export default WrongInputAlert;
