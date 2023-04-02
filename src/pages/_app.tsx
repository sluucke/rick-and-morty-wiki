import "react-loading-skeleton/dist/skeleton.css";
import AppContext from "@/context/AppContext";
import { GlobalStyle } from "@/styles/global";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
