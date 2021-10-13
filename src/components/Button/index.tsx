import React from 'react';
import { ButtonProps } from 'types';
import { Wrapper } from 'components/Button/styles';

function Button(props: ButtonProps): React.ReactElement {
  const { children, ...rest } = props;
  return (
    <Wrapper type="button" {...rest}>
      {children}
    </Wrapper>
  );
}

export default Button;
