import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;

  ${down('sm')} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
