import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.gutter};
  top: ${({ theme }) => theme.spacing.gutter};
  width: 120px;
  height: 120px;
  max-width: 120px;

  ${down('sm')} {
    width: 70px;
    height: 70px;
    max-width: 70px;
  }
`;
