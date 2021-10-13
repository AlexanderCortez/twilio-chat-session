import React from 'react';

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'ref'> {
  children: React.ReactNode;
  isPrimary?: boolean;
}

export interface InputProps extends React.ComponentProps<'input'> {
  isHeading?: boolean;
}
