import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      bg: string;

      primary: string;
      secundary: string;

      white: string;
      gray: string;
      lightgray: string;
      lightgray1: string;

      separator: string;
    };
  }
}
