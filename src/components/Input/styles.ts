import styled from 'styled-components';

type Props = {
  isHeading?: boolean;
};

export const Wrapper = styled.div<Props>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;

  input {
    display: block;
    margin: 0;
    color: inherit;
    background: none;
    background-image: none;
    border: none;
    outline: none !important;
    box-shadow: none;
    appearance: none;

    padding: ${({ theme }): string => theme.spacing.medium};
    padding-left: 0;
    font-size: ${({ isHeading }): string => (isHeading ? '18px' : '14px')};
    font-weight: 500;
    display: block;
    width: 100%;
    color: ${({ theme }): string => theme.palette.black};
    border-bottom: 1px solid ${({ theme }): string => theme.palette.dark};

    &:focus {
      background: none;
      outline: none;
    }
  }
`;
