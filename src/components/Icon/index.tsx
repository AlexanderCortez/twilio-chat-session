import React from 'react';
import { IconProps } from 'types';
import { IconElement } from './styles';

const Icon = (props: IconProps): React.ReactElement => {
  return <IconElement {...props} />;
};

export default Icon;
