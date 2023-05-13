import React from "react";

const BootstrapIcon = (props) => {
  const className = `bi ${props.bootstrapIconName} p-0 h-100`;

  return <i className={className}></i>;
};

export default BootstrapIcon;
