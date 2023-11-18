'use client';
import React from 'react';
import Image from 'next/image';
import getButtonStyles from './styles';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  type?: ButtonType;
  viewType?: string;
  icon?: string;
  alt?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  wrapperStyles?: string;
};

const Button = ({
  text = '',
  icon = '',
  alt = '',
  type = 'button',
  onClick = () => {},
  viewType = 'default',
  wrapperStyles = '',
}: ButtonProps) => {
  return (
    <div className={wrapperStyles}>
      <button
        type={type}
        onClick={onClick}
        className={getButtonStyles(viewType)}
      >
        {text}
        {icon && <Image src={icon} alt={alt} />}
      </button>
    </div>
  );
};

export default Button;
