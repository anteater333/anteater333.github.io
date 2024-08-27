"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { useDarkMode, useMatchMedia } from "./store";
import GlobalStyle, { darkTheme, lightTheme } from "@/styles/theme";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  // 페이지 최초 빌드 시 시스템 다크 모드 설정 불러오기
  useMatchMedia();

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const { isDarkMode } = useDarkMode();

  if (typeof window !== "undefined")
    return (
      <>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </>
    );

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
}
