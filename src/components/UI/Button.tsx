import React from 'react';

const Button: React.FC<{ style: string; children: JSX.Element | string }> = (
  props
) => {
  const { style, children } = props;

  return <button className={`btn btn--${style}`}>{children}</button>;
};

export default Button;
