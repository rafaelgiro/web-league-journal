import type { AppProps } from "next/app";
import { ThemeProvider } from "../contexts/Theme/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
