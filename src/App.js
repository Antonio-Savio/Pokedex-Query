import { GlobalStyles } from './styles/globalStyles';
import { ThemeProvider } from './contexts/theme-context';
import React from 'react';
import { AppRoutes } from './pages/routes';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
