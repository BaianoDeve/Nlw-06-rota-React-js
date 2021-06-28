import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';

import GlobalStyle from './styles/global';

import { Routes } from './routes';

function App() {
  const { theme } = useTheme();

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
