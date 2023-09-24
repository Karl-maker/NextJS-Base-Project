"use client"

import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./config";
import useDarkMode from "use-dark-mode";

export default function Provider({
    children,
  }: {
    children: React.ReactNode
  }) {

    const darkmode = useDarkMode(true);
    const theme = darkmode.value ? darkTheme : lightTheme

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    )
  }