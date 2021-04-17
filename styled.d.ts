import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    spacing: object;

    color: {
      primary: string,
      secondary: string;
      warning: string,
      neutral: string,
      text: string,
    };
  }
}