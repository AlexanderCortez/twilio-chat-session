import styled from 'styled-components';
import { transparentize } from 'utils/styled';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.gutter};
  background-color: ${({ theme }) => transparentize(theme.palette.black, 0.05)};
  border-radius: 6px;
  margin-bottom: ${({ theme }) => theme.spacing.gutter};

  h2 {
    color: ${({ theme }) => theme.palette.black};
  }

  p {
    color: ${({ theme }) => theme.palette.light};
  }
`;
