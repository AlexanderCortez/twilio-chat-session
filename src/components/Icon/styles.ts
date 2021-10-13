import styled from 'styled-components';
import { IconProps } from 'types';

export const IconElement = styled.i.attrs<IconProps>((props) => ({
  className: props.name,
}))<IconProps>`
  color: ${({ theme, isDanger }): string =>
    isDanger ? theme.palette.emphasis : theme.palette.dark};
  font-size: ${({ size }): string => `${size}px`};
`;
