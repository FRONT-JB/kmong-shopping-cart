import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components';
import wrapper from '../store';
import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
