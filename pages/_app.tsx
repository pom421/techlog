import React from "react"
import type { AppProps    } from 'next/app'

import { createGlobalStyle, DefaultTheme, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
    font-size: 16px;
  }
`

const theme = {
  color: {
    primary: "#0070f3",
  },
} as DefaultTheme

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
