import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  max-height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.black};
  color: ${({ theme }) => theme.palette.white};
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 600;
    font-size: 30px;
  }
`;
