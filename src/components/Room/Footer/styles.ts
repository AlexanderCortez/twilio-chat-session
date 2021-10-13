import styled from 'styled-components';
import { transparentize } from 'utils/styled';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.gutter};
  background-color: ${({ theme }) => transparentize(theme.palette.black, 0.05)};
  border-radius: 6px;
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-right: ${({ theme }) => `calc(${theme.spacing.gutter} * 2)`};
  }

  p {
    color: ${({ theme }) => theme.palette.light};
    font-weight: 600;
  }

  button {
    box-shadow: 0 8px 16px 0
      ${({ theme }): string => transparentize(theme.palette.dark, 0.2)};
    background-color: ${({ theme }) => theme.palette.white};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.gutter};
    border-radius: 50%;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;
