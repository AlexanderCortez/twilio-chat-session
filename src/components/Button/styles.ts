import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { transparentize } from 'utils/styled';

type Props = {
  isStyled?: boolean;
  isPrimary?: boolean;
};

type StyleInterpolation = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export const Wrapper = styled.button<Props>`
  margin: 0;
  text-shadow: none;
  cursor: pointer;
  user-select: none;
  background: none;
  border: none;
  outline: none !important;
  box-shadow: none;
  appearance: none;
  border: none;

  ${({ isPrimary }): StyleInterpolation | string =>
    isPrimary
      ? css`
          color: ${({ theme }): string => theme.palette.white};
          background-color: ${({ theme }): string => theme.palette.emphasis};
          border-radius: 3px;
          padding: ${({ theme }): string =>
            `${theme.spacing.medium} ${theme.spacing.gutter}`};

          &:hover {
            box-shadow: 0 8px 16px 0
              ${({ theme }): string => theme.palette.dark};

            background-color: ${({ theme }): string =>
              transparentize(theme.palette.emphasis, 0.9)};
          }
        `
      : ''}
`;
