import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  colors: {
    bgMain: "#F1F1E9",
    textMain: "#222222",
    shadow: "#d4d4d4",
    textSub: "#797981",
    border: "#848484",
    bgInlineCode: "#22272e",
    textInlineCode: "#adbac7",
  },
};

export const darkTheme: CustomTheme = {
  colors: {
    bgMain: "#222222",
    textMain: "#F1F1E9",
    shadow: "#1b1b1b",
    textSub: "#c7c7b8",
    border: "#4a4a4a",
    bgInlineCode: "#443933",
    textInlineCode: "#f5ad8e",
  },
};

export type CustomTheme = typeof lightTheme;

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color-main: ${({ theme }) => theme.colors.bgMain};
    --bg-color-inline: ${({ theme }) => theme.colors.bgInlineCode};
    --text-color-main: ${({ theme }) => theme.colors.textMain};
    --text-color-sub: ${({ theme }) => theme.colors.textSub};
    --text-color-inline: ${({ theme }) => theme.colors.textInlineCode};
    --static-white: ${lightTheme.colors.bgMain};
    --static-black: ${lightTheme.colors.textMain};
    --shadow-color: ${({ theme }) => theme.colors.shadow};
    --border-color: ${({ theme }) => theme.colors.border}
  }

  body {
    background-color: var(--bg-color-main);
    color: var(--text-color-main);

    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;

    * {
      -webkit-transition: all 0.15s;
      transition: all 0.15s;
    }
  }
`;

export default GlobalStyle;
