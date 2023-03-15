import { Box, Container, ThemeProvider, CssBaseline } from '@mui/material';
import { getDataList } from './api/getData';
import { FormData } from './Form';
import RegisterPage from './Register';
import { darkTheme } from './themes/dark.theme';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Box>
          <FormData />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
