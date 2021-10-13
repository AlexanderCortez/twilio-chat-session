import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 300px;
  height: fit-content;
  overflow: hidden;
  position: relative;

  video {
    border: 1px solid ${({ theme }) => theme.palette.light};
    border-radius: 20px;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    object-position: center;
    object-fit: cover;
  }
`;
