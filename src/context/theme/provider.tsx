"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./config";
import useDarkMode from "use-dark-mode";

const DarkModeContext = createContext<ReturnType<typeof useDarkMode>>(null!);

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}

export default function Provider({
    children,
  }: {
    children: React.ReactNode
  }) {

    const darkmode = useDarkMode(true);
    const theme = darkmode.value ? darkTheme : lightTheme

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    return (
      <DarkModeContext.Provider value={darkmode}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </DarkModeContext.Provider>
    )
  }