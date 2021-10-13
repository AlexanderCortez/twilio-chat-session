import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.gutter};
  width: 70%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${down('sm')} {
    height: fit-content;
    width: 100%;
  }
`;
