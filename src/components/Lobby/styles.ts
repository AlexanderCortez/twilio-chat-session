import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  ${down('sm')} {
    width: 100%;
    form {
      width: 100%;
    }
  }
`;
