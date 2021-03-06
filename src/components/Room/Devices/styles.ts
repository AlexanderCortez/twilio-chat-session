import styled from 'styled-components';
import Button from 'components/Button';
import { transparentize } from 'utils/styled';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
`;

export const Trigger = styled(Button)`
  position: absolute;
  width: 5px;
  height: 5px;
  right: -15px;
  top: -10px;
  padding: 0;
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  min-width: 250px;
  bottom: calc(100% + 10px);
  left: -50%;
  background-color: ${({ theme }) => theme.palette.white};

  text-align: left;
  button {
    margin: 0 !important;
    border-bottom: 1px solid ${({ theme }) => theme.palette.light};
    width: 100%;
    height: 32px;
    text-overflow: ellipsis;
    overflow: hidden;
    justify-content: flex-start;
    border-radius: 0 !important;
    font-size: 12px;
    &:hover {
      background-color: ${({ theme }) =>
        transparentize(theme.palette.emphasis, 0.2)};
    }
  }
`;
