import styled, { css } from 'styled-components';

type Props = {
  bordered?: boolean;
};

export const Wrapper = styled.div<Props>`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  video {
    border: none !important;

    border-radius: 20px;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    object-position: center;
    object-fit: cover;
    ${({ bordered }) =>
      bordered &&
      css`
        border: 2px solid ${({ theme }) => theme.palette.white} !important;
      `}
  }
`;

export const Label = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  text-align: center;
  color: ${({ theme }) => theme.palette.white};
  padding: 0 ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-weight: 400;
  letter-spacing: 1px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
