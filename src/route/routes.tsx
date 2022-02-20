import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '~/pages';
import { ROUTE_PATH } from './path';
import { ThemeProvider } from 'styled-components';
import { CartContainer, MainContainer } from '~/container';
import theme from '~/assets/styles/theme';
import { Header } from '~/components';

const MainRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path={ROUTE_PATH.ROOT} element={<Home />}>
            <Route index element={<MainContainer />} />
            <Route path={ROUTE_PATH.CART} element={<CartContainer />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default MainRoutes;
