import 'styled-components';

enum BreakpointKeys {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      white: string;
      black: string;
      dark: string;
      light: string;
      emphasis: string;
    };
    spacing: {
      gutter: string;
      medium: string;
    };
    breakpoints: { [key in BreakpointKeys]: string };
  }
}

declare global {
  type Breakpoints = `${BreakpointKeys}`;
}
