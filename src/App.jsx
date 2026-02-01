import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { defaultTheme as theme } from './styles/themes';
import { JjonddeukLandingPage } from './pages/JjonddeukLandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <JjonddeukLandingPage />
    </ThemeProvider>
  );
}

export default App;
