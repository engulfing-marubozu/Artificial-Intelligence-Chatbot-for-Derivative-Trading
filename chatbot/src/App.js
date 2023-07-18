import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/main';
import { ThemeProvider, createTheme} from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#203864', // Set your desired primary color
      },
      secondary: {
        main: '#bf180e', // Set your desired secondary color
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Main />} />


        </Routes>
   
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
