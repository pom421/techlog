import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    spacing: Record<string, string>;

    color: {
      primary: string,
      secondary: string;
      warning: string,
      neutral: string,
      text: string,
    };
  }
}