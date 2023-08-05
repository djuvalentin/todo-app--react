import React from 'react';
import Alert from 'react-bootstrap/Alert';
import styles from './WrongInputAlert.module.css';

export default function WrongInputAlert({ show }) {
  const alertCombinedClasses = [
    'd-flex',
    'm-2',
    styles['custom-min-width-250px'],
    !show && 'd-none',
  ].join(' ');

  const bootstrapIconCombinedClasses = [
    'bi',
    'bi-exclamation-triangle',
    'fs-3',
    'me-2',
  ].join(' ');

  const messageCombinedClasses = ['mt-auto', 'mb-auto'].join(' ');

  return (
    <Alert key="warning" variant="warning" className={alertCombinedClasses}>
      <i className={bootstrapIconCombinedClasses}></i>
      <p className={messageCombinedClasses}>
        List with this title already exists! Try again.
      </p>
    </Alert>
  );
}
