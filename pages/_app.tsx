import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components/header';
import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
