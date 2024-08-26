import { createGlobalStyle } from "styled-components";

export type CustomTheme = {
  colors: {
    bgMain: string;
    fontMain: string;
  };
};

export const lightTheme: CustomTheme = {
  colors: {
    bgMain: "#ffffff",
    fontMain: "#222222",
  },
};

export const darkTheme: CustomTheme = {
  colors: {
    bgMain: "#222222",
    fontMain: "#ffffff",
  },
};

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color-main: ${({ theme }) => theme.colors.bgMain};
    --text-color-main: ${({ theme }) => theme.colors.fontMain};
  }
`;

export default GlobalStyle;
