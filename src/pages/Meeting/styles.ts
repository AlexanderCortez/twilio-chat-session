import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.gutter};
  width: fit-content;
  min-width: 900px;
  height: 80vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

  ${down('sm')} {
    height: 100vh;
    width: 100%;
    min-width: 0;
  }
`;
