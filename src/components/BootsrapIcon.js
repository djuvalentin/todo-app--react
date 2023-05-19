import React from 'react';

const BootstrapIcon = props => {
  const iconClassName = `bi ${props.bootstrapIconName} ${props.className}`;

  return <i className={iconClassName}></i>;
};

export default BootstrapIcon;
