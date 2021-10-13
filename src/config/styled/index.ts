import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  palette: {
    white: '#ffffff',
    black: '#121212',
    dark: '#333333',
    light: '#828282',
    emphasis: '#EC5757',
  },
  spacing: {
    gutter: '16px',
    medium: '8px',
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1080px',
    xl: '1800px',
  },
};

export default defaultTheme;
