import React from 'react';
import Alert from 'react-bootstrap/Alert';
import BootstrapIcon from '../BootsrapIcon';
import styles from './WrongInputAlert.module.css';

const WrongInputAlert = props => {
  const alertClassName = [
    'd-flex',
    'm-2',
    styles['custom-min-width-250px'],
    !props.show && 'd-none',
  ].join(' ');

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
